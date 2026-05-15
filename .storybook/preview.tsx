import { useEffect } from 'react';
import type { Preview } from '@storybook/nextjs-vite';
import { Cormorant_Garamond, IBM_Plex_Mono } from 'next/font/google';
import '../app/globals.css';

const cormorant = Cormorant_Garamond({
	subsets: ['latin'],
	variable: '--font-cormorant-garamond',
	weight: ['400', '500', '600', '700'],
});

const ibmPlexMono = IBM_Plex_Mono({
	subsets: ['latin'],
	weight: ['400', '500'],
	variable: '--font-ibm-plex-mono',
});

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
			presetColors: [
				{ color: '#ffffff', title: 'Frost 0' },
				{ color: '#f5f6f2', title: 'Frost 1' },
				{ color: '#e8ebe1', title: 'Frost 2' },
				{ color: '#dfe2d8', title: 'Frost 3' },
				{ color: '#c4c8bc', title: 'Frost 4' },
				{ color: '#cdd4c2', title: 'Sage 1' },
				{ color: '#a8b89a', title: 'Sage 2 (Main)' },
				{ color: '#7d9470', title: 'Sage 3' },
				{ color: '#536647', title: 'Sage 4 (Accent)' },
				{ color: '#334030', title: 'Sage 5' },
				{ color: '#1e231b', title: 'Ink' },
				{ color: '#3a4135', title: 'Ink Mid' },
				{ color: '#606859', title: 'Ink Lite' },
				{ color: '#eaede4', title: 'Background' },
			],
		},
		a11y: {
			test: 'todo',
		},
	},
	decorators: [
		(Story) => {
			useEffect(() => {
				document.documentElement.classList.add(
					cormorant.variable,
					ibmPlexMono.variable,
				);
			}, []);

			return (
				<div
					className={`${cormorant.variable} ${ibmPlexMono.variable} font-sans antialiased`}
				>
					<Story />
				</div>
			);
		},
	],
};

export default preview;
