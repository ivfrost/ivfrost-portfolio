'use client';
import { Project } from '@/data/types';
import { BsArrowUpRight, BsStar } from 'react-icons/bs';

export default function ProjectEntry({
	number,
	name,
	description,
	stack,
	stars = 0,
	href,
}: Project) {
	return (
		<div
			className={`flex items-baseline w-full gap-6 pb-6 group ${href ? 'cursor-pointer' : ''}`}
			onClick={() => href && window.open(href, '_blank')}
		>
			{/* Number */}
			<span className="hidden md:block text-text-meta font-mono text-sm shrink-0">
				{number}
			</span>

			{/* Name + go to project + description */}
			<div className="flex flex-col gap-2 flex-1 min-w-0">
				<div className="flex items-baseline gap-3 min-w-0">
					<h3 className="text-base lg:text-md font-base text-text-muted flex items-center shrink-0">
						<span className="group-hover:underline group-hover:decoration-text-muted underline-offset-4">
							{name}
						</span>
						{stars > 0 && (
							<span className="text-xs inline-flex items-center gap-1 text-text-meta ml-1.5">
								<BsStar size={12} /> {stars}
							</span>
						)}
						{href && (
							<BsArrowUpRight
								size={12}
								className="text-text-meta mt-0.5 ml-1.5"
							/>
						)}
					</h3>
				</div>
				<p className="text-sm text-text-meta">{description}</p>
				{
					/* Stack mobile */
					<span className="block md:hidden text-xs text-text-meta text-start">
						{stack.join(' · ')}
					</span>
				}
			</div>

			{/* Stack desktop */}
			<div className="flex items-start gap-4 shrink-0">
				<div className="flex gap-2 flex-wrap">
					<span className="hidden md:block text-xs text-text-meta max-w-72 text-right">
						{stack.join(' · ')}
					</span>
				</div>
			</div>
		</div>
	);
}
