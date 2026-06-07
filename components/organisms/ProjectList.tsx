import { Project } from '@/data/types';
import ProjectEntry from '../molecules/ProjectEntry';

interface ProjectListProps {
	lang?: 'en' | 'es';
	items: Project[];
}

export default function ProjectList({ items, lang }: ProjectListProps) {
	return (
		<>
			{items.length > 0 ? (
				<div className="divide-y divide-border-subtle space-y-6">
					{items.map((project) => (
						<ProjectEntry key={project.number} {...project} lang={lang} />
					))}
				</div>
			) : (
				<p className="text-sm text-muted">No projects to display.</p>
			)}
		</>
	);
}
