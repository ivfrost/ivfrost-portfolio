'use client';

import { cva, cx } from 'class-variance-authority';

export interface NavLinkData {
	label: string;
	href: string;
}

interface NavItemProps extends NavLinkData {
	isActive: boolean;
	className?: string;
}

const navItemVariants = cva(
	[
		'flex items-center gap-2 lowercase font-mono text-sm tracking-wider',
		'transition-colors cursor-pointer',
	],
	{
		variants: {
			isActive: {
				true: 'text-ink cursor-default',
				false: 'text-text-meta hover:text-ink',
			},
		},
	},
);

export default function NavItem({
	label,
	href,
	isActive,
	className,
}: NavItemProps) {
	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();

		const target = document.querySelector(href);
		if (!target) return;

		// Detect your sticky header height (h-16 = 64px)
		const header = document.querySelector('header');
		const headerOffset = header?.clientHeight ?? 64;

		const elementPosition = target.getBoundingClientRect().top;
		const offsetPosition = elementPosition + window.scrollY - headerOffset;

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth',
		});

		window.history.pushState(null, '', href);
	};

	return (
		<button
			onClick={handleClick}
			className={cx(navItemVariants({ isActive }), className)}
		>
			{label}
		</button>
	);
}
