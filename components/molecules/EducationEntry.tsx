'use client';
import type { Education } from '@/data/types';

export default function EducationEntry({
	title,
	institution,
	location,
	dateRange,
	summary,
}: Education) {
	return (
		<div className="relative space-y-4 pb-8">
			<div className="space-y-2">
				<div className="flex justify-between">
					<section>
						<h4 className="text-base text-ink-subtle font-medium">{title}</h4>
						<span className="hidden sm:block text-xs text-text-meta">
							{institution}
							{dateRange ? ` · ${dateRange}` : ''}
						</span>
					</section>
				</div>
				<span className="block sm:hidden text-xs text-text-meta">
					{institution}
					{dateRange ? ` · ${dateRange}` : ''}
					{location ? ` · ${location}` : ''}
				</span>
			</div>
			{summary && <p>{summary}</p>}
		</div>
	);
}
