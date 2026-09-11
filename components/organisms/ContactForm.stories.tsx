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
		contactDesc: 'Contact description',
		submitText: 'Submit',
		nameLabel: 'Name',
		messageLabel: 'Message',
		successMessage: 'Success',
		errorMessage: 'Something went wrong',
		sendContact: async (name, email, message) => {
			console.log('mock submit', { name, email, message });
			return { success: true };
		},
	},
};
