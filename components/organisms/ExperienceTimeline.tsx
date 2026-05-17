import ExperienceEntry from '../molecules/ExperienceEntry';

interface ExperienceTimelineProps {
	entries: {
		title: string;
		company: string;
		location: string;
		dateRange: string;
		description: string;
	}[];
}

export default function ExperienceTimeline({
	entries,
}: ExperienceTimelineProps) {
	return (
		<div className="relative space-y-3">
			{entries.map((entry, index) => (
				<ExperienceEntry
					key={index}
					title={entry.title}
					company={entry.company}
					location={entry.location}
					dateRange={entry.dateRange}
					description={entry.description}
				/>
			))}
		</div>
	);
}
