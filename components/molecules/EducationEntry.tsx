'use client';
import type { Education } from '@/data/types';
import Entry from './Entry';

export default function EducationEntry({
	title,
	institution,
	location,
	dateRange,
	summary,
}: Education) {
	return (
		<Entry
			title={title}
			subtitle={institution + (location ? ` · ${location}` : '')}
			titleMeta={dateRange}
			titleIcons={undefined}
			onClick={undefined}
		>
			{summary && <p>{summary}</p>}
		</Entry>
	);
}
