import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import Container from '@/components/layout/Container';
import { postMarkdownComponents } from '@/components/molecules/PostMarkdown';
import { getPost } from '@/lib/blog';
import { readingTime } from '@/lib/utils';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BsArrowLeft, BsPencil } from 'react-icons/bs';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

export default async function BlogPostPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	const session = await getServerSession(authOptions);
	const authed = !!session;

	let post;
	try {
		post = await getPost(slug);
	} catch {
		notFound();
	}

	const minutes = readingTime(post.body);
	const date = new Date(post.date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	return (
		<Container className="py-10 sm:py-16 max-w-2xl w-full px-4 sm:px-6 overflow-x-hidden">
			<div className="flex items-center justify-between">
				<Link
					href="/blog"
					className="text-sm text-text-meta-lite hover:text-ink transition-colors font-mono lowercase flex items-center"
				>
					<BsArrowLeft size={14} className="mr-1.5" />
					back to blog
				</Link>

				{authed && (
					<Link
						href={`/blog/admin/${post.slug}`}
						className="text-sm text-text-meta-lite hover:text-ink transition-colors font-mono lowercase flex items-center"
					>
						<BsPencil size={12} className="mr-1.5" />
						edit
					</Link>
				)}
			</div>

			<header className="mt-6 sm:mt-8 mb-8 sm:mb-10">
				<h1 className="text-2xl sm:text-3xl md:text-4xl leading-tight wrap-break-word">
					{post.title}
				</h1>
				<p className="text-sm text-text-meta font-mono mt-2">
					{minutes} min read · {date} · thoughts &amp; progress
				</p>
				{post.tags.length > 0 && (
					<p className="text-sm text-accent-3 font-mono mt-1.5 wrap-break-word">
						{post.tags.join(' · ')}
					</p>
				)}
			</header>

			<article className="min-w-0 max-w-full wrap-break-word">
				<Markdown
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeHighlight]}
					components={postMarkdownComponents}
				>
					{post.body}
				</Markdown>
			</article>
		</Container>
	);
}
