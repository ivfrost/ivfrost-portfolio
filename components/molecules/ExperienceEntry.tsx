'use client';
import type { Experience } from '@/data/types';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function ExperienceEntry({
	title,
	company,
	location,
	modality,
	dateRange,
	summary,
	description,
}: Experience) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="relative space-y-6 pb-8">
			<div className="relative space-y-2">
				<div className="flex justify-between">
					<h3 className="text-base text-text-muted font-sans font-medium">
						{title}
					</h3>
					<span className="hidden sm:block text-xs text-text-meta">
						{dateRange}
					</span>
				</div>
				<span className="block sm:hidden text-xs text-text-meta">
					{dateRange}
				</span>
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-2 text-sm text-text-meta">
						<span className="font-sans">{company}</span>
						<span>·</span>
						<span>{location}</span>
						<span>·</span>
						<span>{modality}</span>
					</div>
				</div>
			</div>

			<p>{summary}</p>
			{isOpen ? <>{description}</> : null}
			{summary && description && (
				<button
					className="absolute right-0 bottom-0 cursor-pointer flex items-center gap-1 text-text-meta text-sm"
					onClick={() => setIsOpen(!isOpen)}
				>
					<span>{isOpen ? 'Ver menos' : 'Ver más'}</span>
					<ChevronDown
						size={16}
						strokeWidth={1.75}
						className={`text-text-meta cursor-pointer transition-transform duration-200 transform-rotate-0 ${isOpen ? 'rotate-180' : ''}`}
					/>
				</button>
			)}
		</div>
	);
}
