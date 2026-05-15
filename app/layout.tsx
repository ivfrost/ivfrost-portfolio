import type { Metadata } from 'next';
import { Cormorant_Garamond, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const cormorantGaramond = Cormorant_Garamond({
	variable: '--font-cormorant-garamond',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

const ibmPlexMono = IBM_Plex_Mono({
	variable: '--font-ibm-plex-mono',
	weight: ['400', '500'],
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
			className={`${cormorantGaramond.variable} ${ibmPlexMono.variable} h-full antialiased`}
			style={{ scrollBehavior: 'smooth' }}
		>
			<body className="flex min-h-full flex-col bg-pattern">{children}</body>
		</html>
	);
}
