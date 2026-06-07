import EducationEntry from '@/components/molecules/EducationEntry';
import type { Education } from '@/data/types';
import { formatDate } from '@/lib/utils';

interface EducationTimelineProps {
	entries: Education[];
	heading?: string;
	lang?: 'en' | 'es';
}

export default function EducationTimeline({
	entries,
	heading,
	lang,
}: EducationTimelineProps) {
	return (
		<div className="space-y-4">
			<h3 className="font-mono text-lg tracking-wider text-text-meta-lite mb-6 lowercase block">
				{heading}
			</h3>
			{entries.map((entry, idx) => (
				<EducationEntry
					key={idx}
					title={entry.title}
					institution={entry.institution}
					location={entry.location}
					startDate={formatDate(entry.startDate)}
					endDate={formatDate(entry.endDate)}
					summary={entry.summary}
					isRemote={entry.isRemote}
					lang={lang}
				/>
			))}
		</div>
	);
}
