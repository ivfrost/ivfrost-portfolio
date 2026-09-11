import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import Container from '@/components/layout/Container';
import { getPost } from '@/lib/blog';
import { readingTime } from '@/lib/utils';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BsArrowLeft } from 'react-icons/bs';
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
		// w-full + overflow-x-hidden prevents any child from pushing the page wide
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
						className="text-sm text-text-meta-lite hover:text-ink transition-colors font-mono lowercase"
					>
						edit
					</Link>
				)}
			</div>

			<header className="mt-6 sm:mt-8 mb-8 sm:mb-10">
				<h1 className="text-2xl sm:text-3xl md:text-4xl leading-tight break-words">
					{post.title}
				</h1>
				<p className="text-sm text-text-meta font-mono mt-2">
					{minutes} min read · {date}
				</p>
				{post.tags.length > 0 && (
					<p className="text-sm text-accent-3 font-mono mt-1.5 break-words">
						{post.tags.join(' · ')}
					</p>
				)}
			</header>

			{/* min-w-0 is critical: without it, flex/grid parents let children
			    expand past the container, which is why overflow-x-auto on
			    <pre> wasn't working. */}
			<article className="min-w-0 max-w-full break-words">
				<Markdown
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeHighlight]}
					components={{
						h1: ({ children }) => (
							<h2 className="text-xl sm:text-2xl mt-8 mb-3 font-medium break-words">
								{children}
							</h2>
						),
						h2: ({ children }) => (
							<h3 className="text-lg sm:text-xl mt-8 mb-3 font-medium break-words">
								{children}
							</h3>
						),
						h3: ({ children }) => (
							<h4 className="text-base sm:text-lg mt-6 mb-2 font-medium break-words">
								{children}
							</h4>
						),
						p: ({ children }) => (
							<p className="text-sm sm:text-base text-ink-subtle leading-relaxed mb-3 break-words">
								{children}
							</p>
						),
						a: ({ href, children }) => (
							<a
								href={href}
								className="text-ink underline underline-offset-4 decoration-border hover:decoration-ink transition-colors break-words"
							>
								{children}
							</a>
						),
						blockquote: ({ children }) => (
							// break-words here fixes the "If you can calculate it..."
							// line running off the right edge
							<blockquote className="border-l-2 border-border pl-3 sm:pl-4 my-6 text-sm sm:text-base text-ink-subtle italic break-words">
								{children}
							</blockquote>
						),
						ul: ({ children }) => (
							<ul className="list-disc pl-5 mb-4 text-sm sm:text-base text-ink-subtle leading-relaxed space-y-1 break-words">
								{children}
							</ul>
						),
						ol: ({ children }) => (
							<ol className="list-decimal pl-5 mb-4 text-sm sm:text-base text-ink-subtle leading-relaxed space-y-1 break-words">
								{children}
							</ol>
						),
						// max-w-full + min-w-0 lets the pre scroll horizontally
						// instead of stretching the whole page
						pre: ({ children }) => (
							<pre className="p-3 sm:p-4 my-6 overflow-x-auto max-w-full min-w-0 text-xs font-mono font-semibold leading-relaxed">
								{children}
							</pre>
						),
						code: ({ children, className }) => {
							const isBlock = className?.includes('language-');
							if (isBlock) {
								return <code className={className}>{children}</code>;
							}
							return (
								<code className="bg-background-alt border border-border-subtle rounded-none px-1 py-px text-xs sm:text-sm font-mono font-medium text-ink break-all">
									{children}
								</code>
							);
						},
						hr: () => <hr className="border-border-subtle my-8 sm:my-10" />,
						table: ({ children }) => (
							<div className="overflow-x-auto max-w-full my-6 -mx-4 sm:mx-0 px-4 sm:px-0">
								<table className="w-full text-sm text-left border-collapse">
									{children}
								</table>
							</div>
						),
						th: ({ children }) => (
							<th className="border-b border-border text-text-meta font-mono font-normal lowercase py-2 pr-4 whitespace-nowrap">
								{children}
							</th>
						),
						td: ({ children }) => (
							<td className="border-b border-border-subtle text-ink-subtle py-2 pr-4 break-words">
								{children}
							</td>
						),
						strong: ({ children }) => (
							<strong className="text-ink font-medium">{children}</strong>
						),
					}}
				>
					{post.body}
				</Markdown>
			</article>
		</Container>
	);
}
