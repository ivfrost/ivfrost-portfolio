import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import NavItem from './NavItem';

const meta: Meta<typeof NavItem> = {
	title: 'Molecules/NavItem',
	component: NavItem,
};

export default meta;
type Story = StoryObj<typeof NavItem>;

export const Default: Story = {
	args: {
		href: '#',
		label: 'Home',
		isActive: false,
		className: '',
	},
};

export const Active: Story = {
	args: {
		href: '#',
		label: 'About',
		isActive: true,
		className: '',
	},
};

export const WithCustomClass: Story = {
	args: {
		href: '#',
		label: 'Home',
		isActive: false,
		className: 'text-red-500',
	},
};
