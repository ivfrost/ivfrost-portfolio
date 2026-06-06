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
		startDate: '01/2020',
		endDate: '01/2022',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
};
