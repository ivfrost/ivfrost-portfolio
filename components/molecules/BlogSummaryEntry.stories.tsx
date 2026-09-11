import { Meta, StoryObj } from '@storybook/nextjs-vite';
import BlogSummaryEntry from './BlogSummaryEntry';

const meta: Meta<typeof BlogSummaryEntry> = {
	title: 'Molecules/BlogSummaryEntry',
	component: BlogSummaryEntry,
};

export default meta;
type Story = StoryObj<typeof BlogSummaryEntry>;

export const Default: Story = {
	args: {
		title: 'Going back to the basics',
		slug: 'back-to-basics',
		excerpt:
			'This is an article talking about my personal experience refreshing some fundamental programming concepts during the summer.',
		date: '2026-09-10',
		tags: ['programming', 'basics'],
		readingTime: 4,
	},
};

export const LongTitle: Story = {
	args: {
		...Default.args,
		title:
			'A much longer post title that should wrap and test the layout under pressure',
		slug: 'a-much-longer-post-title',
	},
};

export const ManyTags: Story = {
	args: {
		...Default.args,
		title: 'Everything I learned about state management',
		slug: 'state-management-lessons',
		tags: ['react', 'state', 'redux', 'zustand', 'jotai', 'context-api'],
	},
};

export const NoTags: Story = {
	args: {
		...Default.args,
		title: 'A quiet update',
		slug: 'a-quiet-update',
		tags: [],
		excerpt: 'Just a short note, nothing tagged today.',
	},
};

export const HigherIndex: Story = {
	args: {
		...Default.args,
		title: 'Deep in the archive',
		slug: 'deep-in-the-archive',
	},
};
