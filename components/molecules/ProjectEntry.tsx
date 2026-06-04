'use client';
import { Project } from '@/data/types';
import { BsArrowUpRight, BsStar } from 'react-icons/bs';
import Entry from './Entry';

export default function ProjectEntry({
	number,
	name,
	description,
	stack,
	stars = 0,
	href,
}: Project) {
	return (
		<Entry
			number={number}
			title={name}
			titleIcons={
				<>
					{stars > 0 && (
						<span className="text-xs inline-flex items-center gap-1 ml-1.5">
							<BsStar size={12} /> {stars}
						</span>
					)}
					{href && <BsArrowUpRight size={12} className="mt-0.5 ml-1.5" />}
				</>
			}
			titleMeta={
				<span className="text-xs text-right">{stack.join(' · ')}</span>
			}
			onClick={() => href && window.open(href, '_blank')}
		>
			<p>{description}</p>
		</Entry>
	);
}
