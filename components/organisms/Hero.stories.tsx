import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Hero from './Hero';

const meta: Meta<typeof Hero> = {
	title: 'Components/Hero',
	component: Hero,
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
	args: {
		name: 'Pablo Villena',
		role: 'Desarrollador Full Stack',
		openTo: 'nuevas oportunidades',
		stack: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Java', 'Spring'],
		location: 'Remoto o Málaga',
	},
};
