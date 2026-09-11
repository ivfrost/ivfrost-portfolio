import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import socials from '@/data/socials';
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '../dictionaries';

export default async function BlogLayout({
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
		<div className="flex flex-col min-h-screen">
			<Header
				items={[
					{ label: dict.nav.blog, href: '/en/blog', noActive: true },
					{ label: dict.nav.portfolio, href: '/', noActive: true },
				]}
				isBlog
				authed={authed}
			/>

			<main className="flex-1 flex flex-col">{children}</main>

			<Footer
				name="Pablo Villena"
				socialLinks={socials}
				downloadCvText={dict.footer.downloadCv}
				cvLink={`CV_${lang}.pdf`}
				builtWithText={dict.footer.builtWith}
				portfolioText={dict.footer.portfolio}
				isBlog
				className="border-t border-border"
			/>
		</div>
	);
}
