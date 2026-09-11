import { Project } from '@/data/types';
import Link from 'next/link';
import { TbInfoCircle } from 'react-icons/tb';
import ProjectEntry from '../molecules/ProjectEntry';

interface ProjectListProps {
	lang?: 'en' | 'es';
	items: Project[];
	blogCtaPart1: string;
	blogCtaPart2: string;
}

export default function ProjectList({
	items,
	lang,
	blogCtaPart1,
	blogCtaPart2,
}: ProjectListProps) {
	return (
		<>
			{items.length > 0 ? (
				<div className="space-y-6">
					{items.map((project) => (
						<ProjectEntry key={project.number} {...project} lang={lang} />
					))}
				</div>
			) : (
				<p className="text-sm text-muted">No projects to display.</p>
			)}
			<p className="sm:text-right mt-8 sm:mt-12 pt-6 border-t border-border-subtle text-sm">
				<TbInfoCircle size={12} className="inline-block align-middle mr-1.5" />
				{blogCtaPart1}
				<Link
					href="/en/blog"
					className="group relative font-medium text-ink-subtle hover:text-ink border-b border-ink-subtle-lite hover:border-ink-subtle"
				>
					blog
				</Link>
				{blogCtaPart2}
			</p>
		</>
	);
}
