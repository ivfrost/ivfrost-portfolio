'use client';
import { Project } from '@/data/types';
import Link from 'next/link';
import { BsArrowUpRight, BsStar } from 'react-icons/bs';
import { TbPhoto } from 'react-icons/tb';

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

			{/* Name + description */}
			<div className="flex flex-col gap-1 flex-1 min-w-0">
				<div className="flex items-baseline gap-3 min-w-0">
					<h3 className="text-base lg:text-md font-base text-text-muted flex items-center shrink-0">
						<span className="group-hover:underline group-hover:decoration-text-muted underline-offset-4">
							{name}
						</span>
						{stars > 0 && (
							<span className="text-xs inline-flex items-center gap-1 text-text-meta ml-1.5">
								<BsStar size={11} /> {stars}
							</span>
						)}
					</h3>
					<p className="hidden md:block text-sm text-text-meta min-w-0 flex-1">
						{description}
					</p>
				</div>
				<p className="block md:hidden text-sm text-text-meta">{description}</p>
				<span className="block md:hidden text-xs text-text-meta">
					{stack.join(' · ')}
				</span>
			</div>

			{/* Stack + arrow */}
			<div className="flex items-start gap-4 shrink-0">
				<span className="hidden md:block text-xs text-text-meta max-w-36 text-right">
					{stack.join(' · ')}
				</span>
				{href && (
					<>
						<BsArrowUpRight className="hidden md:block text-text-meta size-3 mt-0.5" />
						<Link
							href={href}
							target="_blank"
							className="md:hidden"
							onClick={(e) => e.stopPropagation()}
						>
							<BsArrowUpRight className="text-text-meta size-4" />
						</Link>
					</>
				)}
			</div>
		</div>
	);
}
