import type { Metadata } from 'next';
import { IBM_Plex_Mono, Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { Toaster } from 'sonner';

const ibmPlexMono = IBM_Plex_Mono({
	variable: '--font-ibm-plex-mono',
	weight: ['400', '500'],
	subsets: ['latin'],
});

const inter = Inter({
	variable: '--font-inter',
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: "ivfrost's portfolio",
	description:
		'A portfolio website built with Next.js, showcasing projects and skills.',
	icons: {
		icon: [
			{ url: '/favicon.ico' },
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
		],
		apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
		other: [{ rel: 'manifest', url: '/images/site.webmanifest' }],
	},
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
				<Toaster position="bottom-right" />
				<Analytics />
			</body>
		</html>
	);
}
