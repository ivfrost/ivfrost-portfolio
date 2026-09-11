'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { BsArrowLeft } from 'react-icons/bs';

const MESSAGES: Record<string, string> = {
	AccessDenied: "You're not authorized to access this site.",
	OAuthCallback: 'GitHub sign-in failed. Please try again.',
	OAuthSignin: 'Could not start GitHub sign-in.',
	Configuration: 'Sign-in is misconfigured. Try again later.',
	Verification: 'That sign-in link has expired.',
	Default: 'Something went wrong signing you in.',
};

export default function AuthError() {
	const params = useSearchParams();
	const code = params.get('error') ?? 'Default';
	const message = MESSAGES[code] ?? MESSAGES.Default;

	return (
		<div className="mx-auto max-w-md py-24 px-4">
			<h1 className="text-2xl font-medium mb-3">Sign-in error</h1>
			<p className="text-ink-subtle mb-8">{message}</p>

			<Link
				href="/blog"
				className="text-sm text-text-meta-lite hover:text-ink transition-colors font-mono lowercase flex items-center"
			>
				<BsArrowLeft size={14} className="mr-1.5" />
				Back to sign in
			</Link>
		</div>
	);
}
