import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Hero from './Hero';
import DiamondSVG from '../atoms/DiamondSVG';

const meta: Meta<typeof Hero> = {
	title: 'Components/Hero',
	component: Hero,
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
	args: {
		ruleContent: (
			<div className="flex items-center gap-1">
				<span>Full Stack Developer</span>
				<DiamondSVG size="0.25em" className="mx-2" />
				<span>Open to Work</span>
			</div>
		),
		titleContent: (
			<span>
				Hi, I&apos;m <span className="text-ink">Ivfrost</span>
			</span>
		),
		subtitle:
			'Crafting precise, living interfaces — where cold clarity meets organic growth',
	},
};
