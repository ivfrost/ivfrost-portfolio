import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import PostForm from './post-form';

export default async function AdminBlogPage() {
	const session = await getServerSession(authOptions);
	if (!session) {
		redirect('/en/auth/signin?callbackUrl=/blog/admin');
	}

	return <PostForm />;
}
