import type { Components } from 'react-markdown';

export const postMarkdownComponents: Components = {
	h1: ({ children }) => (
		<h2 className="text-xl sm:text-2xl mt-8 mb-3 font-medium wrap-break-word">
			{children}
		</h2>
	),
	h2: ({ children }) => (
		<h3 className="text-lg sm:text-xl mt-8 mb-3 font-medium wrap-break-word">
			{children}
		</h3>
	),
	h3: ({ children }) => (
		<h4 className="text-base sm:text-lg mt-6 mb-2 font-medium wrap-break-word">
			{children}
		</h4>
	),
	p: ({ children }) => (
		<p className="text-sm sm:text-base text-ink-subtle leading-relaxed mb-3 wrap-break-word">
			{children}
		</p>
	),
	a: ({ href, children }) => (
		<a
			href={href}
			className="text-ink underline underline-offset-4 decoration-border hover:decoration-ink transition-colors wrap-break-word"
		>
			{children}
		</a>
	),
	blockquote: ({ children }) => (
		<blockquote className="bg-background-alt py-1 border-l-4 border-border-subtle pl-3 sm:pl-4 my-6 text-sm sm:text-base text-ink-subtle italic wrap-break-word">
			{children}
		</blockquote>
	),
	ul: ({ children }) => (
		<ul className="list-disc pl-5 mb-4 text-sm sm:text-base text-ink-subtle leading-relaxed space-y-1 wrap-break-word">
			{children}
		</ul>
	),
	ol: ({ children }) => (
		<ol className="list-decimal pl-5 mb-4 text-sm sm:text-base text-ink-subtle leading-relaxed space-y-1 wrap-break-word">
			{children}
		</ol>
	),
	pre: ({ children }) => (
		<pre className="p-3 sm:p-4 my-6 overflow-x-auto max-w-full min-w-0 text-xs font-mono font-semibold leading-relaxed">
			{children}
		</pre>
	),
	code: ({ children, className }) => {
		const isBlock = className?.includes('language-');
		if (isBlock) return <code className={className}>{children}</code>;
		return (
			<code className="bg-background-alt border border-border-subtle rounded-none px-1 py-px text-xs sm:text-sm font-mono font-medium text-ink break-all">
				{children}
			</code>
		);
	},
	hr: () => <hr className="border-border-subtle my-8 sm:my-10" />,
	table: ({ children }) => (
		<div className="overflow-x-auto max-w-full my-6">
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
		<td className="border-b border-border-subtle text-ink-subtle py-2 pr-4 wrap-break-word">
			{children}
		</td>
	),
	strong: ({ children }) => (
		<strong className="text-ink font-medium">{children}</strong>
	),
};
