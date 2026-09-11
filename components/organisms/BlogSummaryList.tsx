import type { PostSummary } from '@/lib/blog';
import BlogSummaryEntry from '../molecules/BlogSummaryEntry';

export interface BlogSummaryListProps {
	posts: PostSummary[];
}

export default function BlogSummaryList({ posts }: BlogSummaryListProps) {
	return (
		<>
			{posts.length > 0 ? (
				<div className="space-y-6">
					{posts.map((post, i) => (
						<BlogSummaryEntry key={post.slug} {...post} />
					))}
				</div>
			) : (
				<div className="border-b border-border py-6">
					<p className="text-sm text-text-meta">
						No posts yet — check back soon.
					</p>
				</div>
			)}
		</>
	);
}
