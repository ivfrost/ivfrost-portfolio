import type { Metadata } from 'next';
import { IBM_Plex_Mono, Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

const ibmPlexMono = IBM_Plex_Mono({
	variable: '--font-ibm-plex-mono',
	weight: ['400', '500'],
	subsets: ['latin'],
});

const inter = Inter({
	variable: '--font-inter',
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: "ivfrost's portfolio",
	description:
		'A portfolio website built with Next.js, showcasing projects and skills.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${inter.variable} ${ibmPlexMono.variable} h-full antialiased`}
			style={{ scrollBehavior: 'smooth' }}
		>
			<body className="flex min-h-full flex-col bg-pattern">
				{children}
				<Analytics />
			</body>
		</html>
	);
}
