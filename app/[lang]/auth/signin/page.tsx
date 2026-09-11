import Container from '@/components/layout/Container';
import GithubSignInButton from '@/components/molecules/GithubSigninButton';
import { getCsrfToken } from 'next-auth/react';
import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';

export default async function SignInPage({
	searchParams,
}: {
	searchParams: Promise<{ callbackUrl?: string }>;
}) {
	const { callbackUrl } = await searchParams;
	const target = callbackUrl ?? '/blog/admin';
	const csrfToken = await getCsrfToken();

	return (
		<Container className="min-h-screen flex flex-col items-center justify-center text-center">
			<div className="flex flex-col items-start justify-start min-h-[70vh] pb-80 sm:pb-120">
				<Link
					href="/blog"
					className="text-sm text-text-meta-lite hover:text-ink transition-colors font-mono lowercase flex items-center"
				>
					<BsArrowLeft size={14} className="mr-1.5" />
					back to blog
				</Link>
				<h3 className="font-normal font-sans text-lg tracking-wider text-text-meta-lite mb-6 mt-8 lowercase block">
					sign in
				</h3>

				<form method="post" action="/api/auth/signin/github">
					<input type="hidden" name="csrfToken" value={csrfToken} />
					<input type="hidden" name="callbackUrl" value={target} />
					<GithubSignInButton callbackUrl={target} />
				</form>
			</div>
		</Container>
	);
}
