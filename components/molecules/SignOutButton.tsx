'use client';

import { signOut } from 'next-auth/react';

export default function SignOutButton() {
	return (
		<button
			onClick={() => signOut({ callbackUrl: '/' })}
			className="text-sm text-text-meta-lite hover:text-ink transition-colors font-mono lowercase cursor-pointer"
		>
			sign out
		</button>
	);
}
