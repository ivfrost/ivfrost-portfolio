'use client';
import type { Education } from '@/data/types';
import Entry from './Entry';

export interface EducationEntryProps extends Education {
	lang?: 'en' | 'es';
}

export default function EducationEntry({
	title,
	institution,
	location,
	startDate,
	endDate,
	isRemote,
	summary,
	lang,
}: EducationEntryProps) {
	console.log(isRemote);
	return (
		<Entry
			title={title}
			subtitle={
				institution +
				(isRemote
					? lang != 'es'
						? ' · Remote'
						: ' · Remoto'
					: !isRemote && location
						? ` · ${location}`
						: '')
			}
			titleMeta={`${startDate} - ${endDate}`}
			titleIcons={undefined}
			onClick={undefined}
		>
			{summary && <p>{summary[lang || 'en']}</p>}
		</Entry>
	);
}
