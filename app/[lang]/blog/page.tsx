import Container from '@/components/layout/Container';
import BlogSummaryList from '@/components/organisms/BlogSummaryList';
import { getPosts } from '@/lib/blog';

export default async function Home({ params }: PageProps<'/[lang]'>) {
	const [posts] = await Promise.all([getPosts()]);

	return (
		<Container className="py-16 w-full">
			<h3 className="font-normal font-sans text-lg tracking-wider text-text-meta-lite mb-6 lowercase block">
				thoughts &amp; progress — by Pablo Villena
			</h3>
			<BlogSummaryList posts={posts} />
		</Container>
	);
}
