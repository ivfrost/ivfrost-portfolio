import { ReactNode } from 'react';

interface EntryProps {
	title: string;
	titleIcons?: ReactNode;
	titleMeta?: ReactNode;
	number?: string;
	children: ReactNode;
	onClick?: () => void;
}

export default function Entry({
	title,
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
				<div className="flex sm:justify-between flex-col sm:flex-row sm:items-center gap-1">
					<h3 className="flex items-center shrink-0">
						<span className="flex gap-0.75 sm:gap-1 items-center">
							<span className="text-base! group-hover:underline text-ink group-hover:decoration-ink-subtle underline-offset-4">
								{title}
								{titleIcons && (
									<span className="text-text-meta inline-flex align-middle gap-px sm:gap-1 ml-1">
										{titleIcons}
									</span>
								)}
							</span>
						</span>
					</h3>
					{titleMeta && (
						<span className="text-xs text-text-meta sm:text-right sm:ml-auto">
							{titleMeta}
						</span>
					)}
				</div>
				<span className="mt-2">{children}</span>
			</div>
		</div>
	);
}
