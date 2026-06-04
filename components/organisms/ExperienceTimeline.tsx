import ExperienceEntry from '../molecules/ExperienceEntry';
import type { Experience } from '@/data/types';

interface ExperienceTimelineProps {
	entries: Experience[];
}

export default function ExperienceTimeline({
	entries,
}: ExperienceTimelineProps) {
	return (
		<>
			{entries.map((entry, idx) => (
				<ExperienceEntry
					key={idx}
					title={entry.title}
					company={entry.company}
					location={entry.location}
					modality={entry.modality}
					dateRange={entry.dateRange}
					summary={entry.summary}
					description={entry.description}
				/>
			))}
		</>
	);
}
