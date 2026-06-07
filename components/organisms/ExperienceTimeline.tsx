import ExperienceEntry from '../molecules/ExperienceEntry';
import type { Experience } from '@/data/types';
import { formatDate } from '@/lib/utils';

interface ExperienceTimelineProps {
	entries: Experience[];
	lang?: 'en' | 'es';
	showMoreText?: string;
	showLessText?: string;
}

export default function ExperienceTimeline({
	entries,
	lang,
	showMoreText,
	showLessText,
}: ExperienceTimelineProps) {
	return (
		<div className="divide-y space-y-4 divide-border-subtle">
			{entries.map((entry, idx) => (
				<ExperienceEntry
					key={idx}
					title={entry.title}
					company={entry.company}
					location={entry.location}
					modality={entry.modality}
					startDate={formatDate(entry.startDate)}
					endDate={formatDate(entry.endDate)}
					summary={entry.summary}
					description={entry.description}
					lang={lang}
					isRemote={entry.isRemote}
					showMoreText={showMoreText}
					showLessText={showLessText}
				/>
			))}
		</div>
	);
}
