import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import DecorativeRule from './DecorativeRule';

const meta: Meta<typeof DecorativeRule> = {
	title: 'Atoms/DecorativeRule',
	component: DecorativeRule,
};

export default meta;
type Story = StoryObj<typeof DecorativeRule>;

export const Default: Story = {
	args: {
		children: 'Section Title',
	},
};
