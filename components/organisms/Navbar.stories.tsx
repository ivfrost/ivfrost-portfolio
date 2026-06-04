import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Navbar from './Navbar';

const meta: Meta<typeof Navbar> = {
	title: 'Components/Navbar',
	component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
	args: {
		items: [
			{ label: 'About', href: '/about' },
			{ label: 'Work', href: '/work' },
			{ label: 'Skills', href: '/skills' },
			{ label: 'Contact', href: '/contact' },
		],
	},
};
