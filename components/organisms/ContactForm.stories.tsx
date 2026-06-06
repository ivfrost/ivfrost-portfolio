import { Meta, StoryObj } from '@storybook/nextjs-vite';
import ContactForm from './ContactForm';

const meta: Meta<typeof ContactForm> = {
	title: 'Organisms/ContactForm',
	component: ContactForm,
};

export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {
	args: {
		// No props needed for this component
	},
};
