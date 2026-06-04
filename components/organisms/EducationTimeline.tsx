import EducationEntry from '@/components/molecules/EducationEntry';
import type { Education } from '@/data/types';

interface EducationTimelineProps {
	entries: Education[];
}

export default function EducationTimeline({ entries }: EducationTimelineProps) {
	return (
		<div className="divide-y space-y-4 divide-border-subtle">
			{entries.map((entry, idx) => (
				<EducationEntry
					key={idx}
					title={entry.title}
					institution={entry.institution}
					location={entry.location}
					dateRange={entry.dateRange}
					summary={entry.summary}
				/>
			))}
		</div>
	);
}
