import { Meta, StoryObj } from '@storybook/nextjs-vite';
import Card from './Card';

const meta: Meta<typeof Card> = {
	title: 'Molecules/Card',
	component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
	args: {
		title: 'Card Title',
		content:
			'This is the content of the card. It can be a string or any React node.',
		hasLeftRule: false,
	},
};

export const WithLeftRule: Story = {
	args: {
		title: 'Card with Left Rule',
		content: 'This card has a left border to highlight it.',
		hasLeftRule: true,
	},
};

export const CustomClass: Story = {
	args: {
		title: 'Custom Styled Card',
		content: 'This card has additional custom styles applied.',
		hasLeftRule: true,
		className: 'bg-sage-1 text-ink p-8',
	},
};
