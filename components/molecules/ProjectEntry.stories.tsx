import { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProjectEntry from './ProjectEntry';

const meta: Meta<typeof ProjectEntry> = {
	title: 'Molecules/ProjectEntry',
	component: ProjectEntry,
};

export default meta;
type Story = StoryObj<typeof ProjectEntry>;

export const Default: Story = {
	args: {
		number: '01',
		name: 'spring-ticketing-microservices',
		description: {
			es: 'Sistema distribuido de gestión de eventos y tickets',
			en: 'Distributed event and ticket management system',
		},
		stack: ['Java', 'Spring Boot'],
		href: 'https://github.com/ivfrost/spring-ticketing-microservices',
	},
};
