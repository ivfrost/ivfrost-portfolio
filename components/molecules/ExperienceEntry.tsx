'use client';
import type { Experience } from '@/data/types';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import Entry from './Entry';
import Button from '../atoms/Button';

export default function ExperienceEntry({
	title,
	company,
	location,
	startDate,
	endDate,
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
			titleMeta={`${startDate} - ${endDate}`}
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
				<Button
					type="button"
					variant="outline"
					size="small"
					onClick={() => setIsOpen(!isOpen)}
					className="w-full sm:w-auto sm:ml-auto mt-6"
				>
					<div className="flex items-center">
						<span>{isOpen ? 'Mostrar menos' : 'Mostrar más'}</span>
						<ChevronDown
							size={16}
							className={`ml-2 transition-transform ${
								isOpen ? 'rotate-180' : 'rotate-0'
							}`}
						/>
					</div>
				</Button>
			)}
		</Entry>
	);
}
