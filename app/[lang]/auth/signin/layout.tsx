import { getDictionary, hasLocale } from '@/app/[lang]/dictionaries';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import Header from '@/components/organisms/Header';
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';

export default async function SignInLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ lang: string }>;
}) {
	const session = await getServerSession(authOptions);
	const authed = !!session;
	const { lang } = await params;

	if (!hasLocale(lang)) {
		notFound();
	}
	const dict = await getDictionary(lang);

	return (
		<>
			<Header
				items={[
					{ label: dict.nav.blog, href: '/en/blog', noActive: true },
					{ label: dict.nav.portfolio, href: '/', noActive: true },
				]}
				isSignIn
			/>

			{children}
		</>
	);
}
