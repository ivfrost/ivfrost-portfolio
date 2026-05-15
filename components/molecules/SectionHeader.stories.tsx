import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import SectionHeader from './SectionHeader';

const meta: Meta<typeof SectionHeader> = {
	title: 'Molecules/SectionHeader',
	component: SectionHeader,
};

export default meta;
type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {
	args: {
		text: 'Section Title',
	},
};
