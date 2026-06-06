import EducationEntry from '@/components/molecules/EducationEntry';
import type { Education } from '@/data/types';

interface EducationTimelineProps {
	entries: Education[];
}

export default function EducationTimeline({ entries }: EducationTimelineProps) {
	return (
		<div className="space-y-4">
			<h3 className="font-mono text-lg tracking-wider text-text-meta-lite mb-6 lowercase block">
				estudios
			</h3>
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
