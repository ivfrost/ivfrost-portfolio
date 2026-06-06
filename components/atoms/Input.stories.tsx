import { Meta, StoryObj } from '@storybook/nextjs-vite';
import Input from './Input';

const meta: Meta<typeof Input> = {
	title: 'Molecules/Input',
	component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		label: 'Name',
		onChange: (value) => console.log('Input changed:', value),
	},
};
