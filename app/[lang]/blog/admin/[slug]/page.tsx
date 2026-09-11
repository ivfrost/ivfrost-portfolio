import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { getPost } from '@/lib/blog';
import { getServerSession } from 'next-auth';
import { notFound, redirect } from 'next/navigation';
import EditPostForm from './edit-post-form';

export default async function EditBlogPostPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	const session = await getServerSession(authOptions);
	if (!session) {
		redirect(`/en/auth/signin?callbackUrl=/blog/admin/${slug}`);
	}

	let post;
	try {
		post = await getPost(slug);
	} catch {
		notFound();
	}

	return <EditPostForm post={post} />;
}
