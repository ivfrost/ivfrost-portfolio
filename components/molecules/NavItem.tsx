'use client';

import { cva, cx } from 'class-variance-authority';
import { motion } from 'framer-motion';

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
		'transition-colors cursor-pointer relative',
	],
	{
		variants: {
			isActive: {
				true: 'text-ink-mid cursor-default',
				false: 'text-text-meta hover:text-ink-mid',
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
			{isActive && (
				<motion.div
					layoutId="underline"
					className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-[1px] w-full rounded-full bg-ink-lite"
					transition={{ type: 'spring', stiffness: 500, damping: 30 }}
				/>
			)}
		</button>
	);
}
