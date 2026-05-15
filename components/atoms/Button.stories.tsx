import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Button from './Button';

const meta: Meta<typeof Button> = {
	title: 'Atoms/Button',
	component: Button,
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['primary', 'outline', 'ghost'],
		},
		modifier: {
			control: { type: 'select' },
			options: ['full-width'],
		},
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large'],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		type: 'button',
		variant: 'primary',
		children: 'Primary Button',
	},
};

export const Outline: Story = {
	args: {
		type: 'button',
		variant: 'outline',
		children: 'Outline Button',
	},
};

export const Ghost: Story = {
	args: {
		type: 'button',
		variant: 'ghost',
		children: 'Ghost Button',
	},
};

export const FullWidth: Story = {
	args: {
		type: 'button',
		variant: 'primary',
		modifier: 'full-width',
		children: 'Full Width Button',
	},
};

export const Sizes: Story = {
	args: {
		type: 'button',
		variant: 'primary',
		children: 'Button',
	},
	render: (args) => (
		<div className="flex flex-col gap-4">
			<Button {...args} size="small">
				Small Button
			</Button>
			<Button {...args} size="medium">
				Medium Button
			</Button>
			<Button {...args} size="large">
				Large Button
			</Button>
		</div>
	),
};
