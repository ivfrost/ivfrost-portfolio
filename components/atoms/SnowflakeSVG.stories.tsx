import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import SnowflakeSVG from './SnowflakeSVG';

const meta: Meta<typeof SnowflakeSVG> = {
	title: 'Atoms/SnowflakeSVG',
	component: SnowflakeSVG,
	argTypes: {
		color: { control: 'color' },
	},
};

export default meta;
type Story = StoryObj<typeof SnowflakeSVG>;

export const Default: Story = {
	args: {
		size: 120,
	},
};

export const Small: Story = {
	args: {
		size: 60,
	},
};

export const Large: Story = {
	args: {
		size: 240,
	},
};
