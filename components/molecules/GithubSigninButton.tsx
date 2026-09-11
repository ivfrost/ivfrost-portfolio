'use client';

import Button from '@/components/atoms/Button';
import { signIn } from 'next-auth/react';
import { BsGithub } from 'react-icons/bs';

export default function GithubSignInButton({
	callbackUrl,
}: {
	callbackUrl: string;
}) {
	return (
		<Button
			type="button"
			variant="outline"
			size="small"
			onClick={() => signIn('github', { callbackUrl })}
		>
			<BsGithub size={14} className="mr-1.5" />
			Sign in with GitHub
		</Button>
	);
}
