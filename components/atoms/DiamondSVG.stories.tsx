import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import DiamondSVG from './DiamondSVG';

const meta: Meta<typeof DiamondSVG> = {
	title: 'Atoms/DiamondSVG',
	component: DiamondSVG,
};

export default meta;
type Story = StoryObj<typeof DiamondSVG>;

export const Default: Story = {
	args: {
		size: 20,
	},
};

export const Small: Story = {
	args: {
		size: 10,
	},
};

export const Large: Story = {
	args: {
		size: 40,
	},
};
