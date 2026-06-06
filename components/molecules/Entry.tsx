'use client';
import { ReactNode } from 'react';

interface EntryProps {
	title: ReactNode | string;
	subtitle?: string;
	titleIcons?: ReactNode;
	titleMeta?: ReactNode;
	number?: string;
	children: ReactNode;
	onClick?: () => void;
}

export default function Entry({
	title,
	subtitle,
	titleIcons,
	titleMeta,
	number,
	children,
	onClick,
}: EntryProps) {
	return (
		<div
			onClick={onClick}
			className={`group pb-4 flex gap-4 sm:gap-6 sm:pb-6 items-baseline ${onClick ? 'cursor-pointer' : ''}`}
		>
			{number && (
				<span className="hidden md:block text-text-meta font-mono text-sm shrink-0">
					{number}
				</span>
			)}
			<div className="flex flex-col gap-px flex-1 min-w-0">
				<div className="flex sm:justify-between flex-col sm:flex-row gap-1">
					<h3 className="flex flex-col items-start gap-y-1 shrink-0">
						<span
							className={`${onClick ? 'group-hover:underline group-hover:decoration-ink-subtle underline-offset-4' : ''}`}
						>
							{title}
							{titleIcons && (
								<span className="text-text-meta-lite inline-flex items-center gap-px sm:gap-1 ml-1">
									{titleIcons}
								</span>
							)}
						</span>
						{subtitle && (
							<span className="hidden tracking-normal sm:inline text-xs text-text-meta">
								{subtitle}
							</span>
						)}
						{titleMeta && (
							<span className="text-xs block sm:hidden tracking-normal text-text-meta-lite sm:text-right sm:ml-auto">
								{titleMeta}
							</span>
						)}
						{subtitle && (
							<span className="inline sm:hidden text-xs text-text-meta">
								{subtitle}
							</span>
						)}
					</h3>
					{titleMeta && (
						<span className="text-sm hidden sm:block tracking-normal text-text-meta-lite sm:text-right sm:ml-auto">
							{titleMeta}
						</span>
					)}
				</div>
				<span className="mt-2">{children}</span>
			</div>
		</div>
	);
}
