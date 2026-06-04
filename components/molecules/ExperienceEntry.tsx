'use client';
import type { Experience } from '@/data/types';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

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
		<div className="relative space-y-4 pb-4">
			{/* Header */}
			<div className="space-y-2">
				<div className="flex justify-between">
					<h3 className="text-base text-text-muted font-medium">{title}</h3>
					<span className="hidden sm:block text-xs text-text-meta">
						{dateRange}
					</span>
				</div>

				<span className="block sm:hidden text-xs text-text-meta">
					{dateRange}
				</span>

				<div className="flex items-center gap-2 text-sm text-text-meta">
					<span>{company}</span>
					<span>·</span>
					<span>{location}</span>
					<span>·</span>
					<span>{modality}</span>
				</div>
			</div>

			{/* Summary */}
			<p>{summary}</p>

			{/* Expanded content */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						key="content"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{
							type: 'spring',
							stiffness: 220,
							damping: 26,
						}}
						className="overflow-hidden"
					>
						<div>{description}</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Toggle button */}
			{summary && description && (
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="flex ml-auto items-center cursor-pointer gap-1 text-text-meta text-sm hover:text-ink transition-colors"
				>
					<span>{isOpen ? 'Leer menos' : 'Leer más'}</span>
					<ChevronDown
						size={16}
						strokeWidth={1.75}
						className={`transition-transform duration-200 ${
							isOpen ? 'rotate-180' : ''
						}`}
					/>
				</button>
			)}
		</div>
	);
}
