import type { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import assert from 'node:assert';

assert(process.env.NEXTAUTH_SECRET, 'NEXTAUTH_SECRET is missing');
assert(process.env.GITHUB_ID, 'GITHUB_ID is missing');
assert(process.env.GITHUB_SECRET, 'GITHUB_SECRET is missing');
assert(process.env.ALLOWED_GITHUB_USER, 'ALLOWED_GITHUB_USER is missing');

export const authOptions: NextAuthOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID!,
			clientSecret: process.env.GITHUB_SECRET!,
		}),
	],
	pages: {
		signIn: '/en/auth/signin',
		error: '/en/auth/error',
	},
	callbacks: {
		async signIn({ profile }) {
			// GitHub profile.login is the username, e.g. "torvalds"
			return profile?.email === process.env.ALLOWED_GITHUB_USER;
		},
		async session({ session, token }) {
			if (session.user && token.sub) {
				(session.user as any).id = token.sub;
			}
			return session;
		},
	},
	session: { strategy: 'jwt' },
	secret: process.env.NEXTAUTH_SECRET,
};
