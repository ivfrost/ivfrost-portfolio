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
		title: {
			en: 'Software Engineer',
			es: 'Ingeniero de Software',
		},
		company: 'Tech Company',
		location: 'San Francisco, CA',
		startDate: '01/2020',
		endDate: '01/2022',
		description: {
			en: 'Worked on developing and maintaining web applications using React and Node.js.',
			es: 'Trabajé en el desarrollo y mantenimiento de aplicaciones web utilizando React y Node.js.',
		},
	},
};
