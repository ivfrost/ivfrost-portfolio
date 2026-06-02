import ExperienceEntry from '../molecules/ExperienceEntry';
import type { Experience } from '@/data/types';

interface ExperienceTimelineProps {
	entries: Experience[];
}

export default function ExperienceTimeline({
	entries,
}: ExperienceTimelineProps) {
	return (
		<div className="relative space-y-6 divide-y divide-border divide-dotted ">
			{entries.map((entry, idx) => (
				<ExperienceEntry
					key={idx}
					title={entry.title}
					company={entry.company}
					location={entry.location}
					modality={entry.modality}
					dateRange={entry.dateRange}
					description={entry.description}
				/>
			))}
		</div>
	);
}
