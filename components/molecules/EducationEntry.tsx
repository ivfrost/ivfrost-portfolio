'use client';
import type { Education } from '@/data/types';
import Entry from './Entry';

export default function EducationEntry({
	title,
	institution,
	location,
	startDate,
	endDate,
	summary,
}: Education) {
	return (
		<Entry
			title={title}
			subtitle={institution + (location ? ` · ${location}` : '')}
			titleMeta={`${startDate} - ${endDate}`}
			titleIcons={undefined}
			onClick={undefined}
		>
			{summary && <p>{summary}</p>}
		</Entry>
	);
}
