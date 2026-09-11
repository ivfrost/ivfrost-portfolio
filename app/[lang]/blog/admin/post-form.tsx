'use client';

import { createPostAction } from '@/actions/blog';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Container from '@/components/layout/Container';
import '@uiw/react-md-editor/markdown-editor.css';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { BsArrowLeft } from 'react-icons/bs';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

export default function PostForm() {
	const router = useRouter();
	const [title, setTitle] = useState('');
	const [tagsInput, setTagsInput] = useState('');
	const [excerpt, setExcerpt] = useState('');
	const [body, setBody] = useState('# New post\n\nStart writing...');
	const [error, setError] = useState<string | null>(null);
	const [isPending, startTransition] = useTransition();

	function handleSubmit(e: React.SubmitEvent) {
		e.preventDefault();
		setError(null);

		const tags = tagsInput
			.split(',')
			.map((t) => t.trim())
			.filter(Boolean);

		startTransition(async () => {
			const result = await createPostAction({
				title,
				tags,
				body,
				excerpt,
				date: new Date().toISOString(),
			});

			if (!result.ok) {
				setError(result.error.message ?? 'Failed to save post');
				return;
			}

			router.push(`/blog/${result.data.slug}`);
		});
	}

	return (
		<Container className="py-16 w-3xl">
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
				new post
			</h3>

			<form onSubmit={handleSubmit} className="space-y-6 w-full">
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
					<MDEditor
						value={body}
						onChange={(v) => setBody(v ?? '')}
						height={400}
						preview="edit"
					/>
				</div>

				{error && <p className="text-sm text-red-500">{error}</p>}

				<div className="flex justify-end">
					<Button
						type="submit"
						variant="outline"
						size="small"
						disabled={isPending}
					>
						{isPending ? 'saving...' : 'save post'}
					</Button>
				</div>
			</form>
		</Container>
	);
}
