'use client';

import { format, parseISO } from 'date-fns';
import { useRouter } from 'next/navigation';
import Entry from '../molecules/Entry'; // adjust path to your actual location

interface BlogSummaryEntryProps {
	slug: string;
	title: string;
	date: string;
	excerpt: string;
	tags: string[];
	readingTime: number;
}

export default function BlogSummaryEntry({
	slug,
	title,
	date,
	excerpt,
	tags,
	readingTime,
}: BlogSummaryEntryProps) {
	const router = useRouter();
	const displayDate = format(parseISO(date), 'MMM d, yyyy');

	return (
		<Entry
			title={title}
			titleMeta={
				<time dateTime={date}>
					{readingTime != null && `${readingTime} min read · `}
					{displayDate}
				</time>
			}
			onClick={() => router.push(`/blog/${slug}`)}
			className="border-b border-border last:border-b-0"
		>
			<p className="prose max-w-prose text-ink-subtle line-clamp-3 relative">
				{excerpt}
			</p>
			{tags.length > 0 && (
				<p className="mt-1 text-xs text-text-meta-lite">{tags.join(' · ')}</p>
			)}
		</Entry>
	);
}
