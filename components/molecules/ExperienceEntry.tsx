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
	description,
}: Experience) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="relative">
			<div
				className="cursor-pointer space-y-1 border-text-meta pb-6"
				onClick={() => setIsOpen(!isOpen)}
			>
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
					<ChevronDown
						size={16}
						strokeWidth={1.75}
						className={`text-text-meta cursor-pointer transition-transform duration-200 transform-rotate-0 ${isOpen ? 'rotate-180' : ''}`}
					/>
				</div>
			</div>
			<div className={`${isOpen ? 'border-t border-border pt-12' : ''} `}>
				<div
					className={`${isOpen ? 'block' : 'hidden'} mx-auto max-w-prose-sm lg:max-w-prose-lg rounded relative *:text-base *:text-text-muted *:leading-relaxed`}
				>
					{description}
				</div>
			</div>
		</div>
	);
}
