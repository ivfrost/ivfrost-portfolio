'use client';
import type { Experience } from '@/data/types';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import Entry from './Entry';

export default function ExperienceEntry({
	title,
	company,
	location,
	dateRange,
	modality,
	summary,
	description,
}: Experience) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Entry
			title={title}
			subtitle={
				company +
				(location ? ` · ${location}` : '') +
				(modality ? ` · ${modality}` : '')
			}
			titleMeta={dateRange}
			titleIcons={undefined}
			onClick={undefined}
		>
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
					className="flex mt-6 ml-auto items-center cursor-pointer gap-1 text-text-meta text-sm hover:text-ink transition-colors"
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
		</Entry>
	);
}
