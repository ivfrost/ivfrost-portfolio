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

export async function generateMetadata({ params }: PageProps<'/[lang]'>) {
	const { lang } = await params;

	return {
		title: 'Pablo Villena - Portfolio',
		description:
			lang === 'es'
				? 'Portfolio de Pablo Villena, desarrollador full-stack. Incluye proyectos, experiencia laboral, educación y contacto.'
				: 'Portfolio of Pablo Villena, a full-stack developer. Includes projects, work experience, education and contact.',
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
}

export default async function RootLayout({
	params,
	children,
}: {
	params: Promise<{ lang: string }>;
	children: React.ReactNode;
}) {
	const { lang } = await params;

	return (
		<html
			lang={lang}
			className={`${inter.variable} ${ibmPlexMono.variable} h-full antialiased`}
			style={{ scrollBehavior: 'smooth' }}
		>
			<body className="flex min-h-full flex-col bg-pattern">
				{children}
				<Toaster position="bottom-right" />
				{process.env.NODE_ENV === 'production' && <Analytics />}
			</body>
		</html>
	);
}
