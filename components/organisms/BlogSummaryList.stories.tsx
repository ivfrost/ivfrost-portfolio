import { Meta, StoryObj } from '@storybook/nextjs-vite';
import BlogSummaryList from './BlogSummaryList';

const meta: Meta<typeof BlogSummaryList> = {
	title: 'Organisms/BlogSummaryList',
	component: BlogSummaryList,
};

export default meta;
type Story = StoryObj<typeof BlogSummaryList>;

const samplePosts = [
	{
		slug: 'back-to-basics',
		title: 'Going back to the basics',
		excerpt:
			'This is an article talking about my personal experience refreshing some fundamental programming concepts during the summer.',
		date: '2026-09-10',
		tags: ['programming', 'basics'],
		readingTime: 4,
	},
	{
		slug: 'state-management-lessons',
		title: 'Everything I learned about state management',
		excerpt:
			"A rundown of the approaches I tried before settling on the one that actually fit the project — and why the others didn't.",
		date: '2026-08-22',
		tags: ['react', 'state', 'redux', 'zustand'],
		readingTime: 7,
	},
	{
		slug: 'a-quiet-update',
		title: 'A quiet update',
		excerpt: 'Just a short note, nothing tagged today.',
		date: '2026-07-30',
		tags: [],
		readingTime: 2,
	},
];

export const Default: Story = {
	args: {
		posts: samplePosts,
	},
};

export const EmptyPostList: Story = {
	args: {
		posts: [],
	},
};
