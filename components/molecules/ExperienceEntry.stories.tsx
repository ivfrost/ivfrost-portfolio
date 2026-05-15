import { Meta, StoryObj } from '@storybook/nextjs-vite';
import ExperienceEntry from './ExperienceEntry';

const meta: Meta<typeof ExperienceEntry> = {
	title: 'Molecules/ExperienceEntry',
	component: ExperienceEntry,
};

export default meta;
type Story = StoryObj<typeof ExperienceEntry>;

export const Default: Story = {
	args: {
		title: 'Software Engineer',
		company: 'Tech Company',
		location: 'San Francisco, CA',
		dateRange: 'Jan 2020 — Present',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
};
