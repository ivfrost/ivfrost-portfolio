'use client';

import { deletePostAction, updatePostAction } from '@/actions/blog';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Container from '@/components/layout/Container';
import { postMarkdownComponents } from '@/components/molecules/PostMarkdown';
import type { Post } from '@/lib/blog';
import '@uiw/react-md-editor/markdown-editor.css';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState, useTransition } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

export default function EditPostForm({ post }: { post: Post }) {
	const [title, setTitle] = useState(post.title);
	const [tagsInput, setTagsInput] = useState(post.tags.join(', '));
	const [excerpt, setExcerpt] = useState(post.excerpt);
	const [body, setBody] = useState(post.body);
	const [error, setError] = useState<string | null>(null);
	const [isPending, startTransition] = useTransition();
	const [isDeleting, startDeleteTransition] = useTransition();

	function handleSubmit(e: React.SubmitEvent) {
		e.preventDefault();
		setError(null);

		const tags = tagsInput
			.split(',')
			.map((t) => t.trim())
			.filter(Boolean);

		startTransition(async () => {
			const result = await updatePostAction(post.slug, {
				title,
				tags,
				body,
				excerpt,
				date: post.date, // keep original publish date on edit
			});

			if (!result.ok) {
				setError(result.error.message ?? 'Failed to save post');
				return;
			}

			window.location.href = `/blog/${result.data.slug}`;
		});
	}

	function handleDelete() {
		if (!confirm(`Delete "${post.title}"? This can't be undone.`)) return;

		startDeleteTransition(async () => {
			const result = await deletePostAction(post.slug);
			if (!result.ok) {
				setError(result.error.message ?? 'Failed to delete post');
				return;
			}
			window.location.href = '/blog';
		});
	}

	return (
		<Container className="py-16">
			<div className="flex items-center justify-between">
				<Link
					href="/blog"
					className="text-sm text-text-meta-lite hover:text-ink transition-colors font-mono lowercase flex items-center"
				>
					<BsArrowLeft size={14} className="mr-1.5" />
					back to blog
				</Link>
			</div>

			<h3 className="font-normal font-sans text-lg tracking-wider text-text-meta-lite mb-6 lowercase mt-8">
				edit post
			</h3>

			<form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
				<Input
					name="title"
					label="title"
					value={title}
					onChange={setTitle}
					required
				/>

				<Input
					name="tags"
					label="tags (comma-separated)"
					value={tagsInput}
					onChange={setTagsInput}
				/>

				<Input
					name="excerpt"
					label="excerpt"
					as="textarea"
					rows={2}
					value={excerpt}
					onChange={setExcerpt}
					required
				/>

				<div data-color-mode="light">
					<label className="block text-sm text-text-meta mb-2">body</label>
					<div data-color-mode="light">
						<MDEditor
							value={body}
							onChange={(v) => setBody(v ?? '')}
							preview="live"
							height={600}
							visibleDragbar={false}
							previewOptions={{
								components: postMarkdownComponents,
								rehypePlugins: [rehypeHighlight],
								remarkPlugins: [remarkGfm],
							}}
						/>
					</div>
				</div>

				{error && <p className="text-sm text-red-500">{error}</p>}

				<div className="flex justify-between items-center">
					<button
						type="button"
						onClick={handleDelete}
						disabled={isDeleting}
						className="text-sm text-red-500 hover:text-red-700 transition-colors font-mono lowercase border-b border-t px-4 pt-2.25 pb-3.75 cursor-pointer border-red-500 hover:border-red-700"
					>
						{isDeleting ? 'deleting...' : 'delete post'}
					</button>

					<Button
						type="submit"
						variant="outline"
						size="small"
						disabled={isPending}
					>
						{isPending ? 'saving...' : 'save changes'}
					</Button>
				</div>
			</form>
		</Container>
	);
}
