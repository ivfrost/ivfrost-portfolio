'use client';
import { Project } from '@/data/types';
import { BsStar } from 'react-icons/bs';
import Entry from './Entry';
import { ExternalLink, Users } from 'lucide-react';
import type { Locale } from '@/app/[lang]/dictionaries';

export interface ProjectEntryProps extends Project {
	lang?: Locale;
}

export default function ProjectEntry({
	number,
	name,
	description,
	lang,
	stack,
	collaborative = false,
	stars = 0,
	href,
}: ProjectEntryProps) {
	return (
		<Entry
			number={number}
			title={name}
			titleIcons={
				<>
					{collaborative && (
						<span
							title={
								lang === 'es'
									? 'Proyecto colaborativo'
									: 'Collaborative project'
							}
							className="text-xs inline-flex items-center gap-1 ml-1.5 opacity-60"
						>
							<Users size={14} />
						</span>
					)}
					{stars > 0 && (
						<span className="text-xs inline-flex items-center gap-1 ml-1.5">
							<BsStar size={14} /> {stars}
						</span>
					)}
					{href && <ExternalLink size={14} className="ml-0.75" />}
				</>
			}
			titleMeta={<span>{stack.join(' · ')}</span>}
			onClick={href ? () => window.open(href, '_blank') : undefined}
		>
			<p className="-mt-2">{description[lang ?? 'en']}</p>
		</Entry>
	);
}
