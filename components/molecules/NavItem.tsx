'use client';

import { cva, cx } from 'class-variance-authority';
import { motion } from 'framer-motion';

export interface NavLinkData {
	label: string;
	href: string;
}

interface NavItemProps extends NavLinkData {
	isActive: boolean;
	isMobile?: boolean;
	className?: string;
	onNavigate?: () => void;
}

const navItemVariants = cva(
	[
		'flex items-center gap-2 lowercase font-mono tracking-wider',
		'transition-colors cursor-pointer relative',
	],
	{
		variants: {
			isActive: {
				true: 'cursor-default',
				false: 'hover:text-ink',
			},
			isMobile: {
				true: 'text-xl font-mono w-fit',
				false: 'text-sm',
			},
		},
		defaultVariants: {
			isActive: false,
			isMobile: false,
		},
		compoundVariants: [
			{ isMobile: false, isActive: false, class: 'text-text-meta' },
			{ isMobile: false, isActive: true, class: 'text-ink' },
			{ isMobile: true, isActive: false, class: 'text-ink' },
			{ isMobile: true, isActive: true, class: 'text-ink' },
		],
	},
);

export default function NavItem({
	label,
	href,
	isActive,
	isMobile,
	onNavigate,
	className,
}: NavItemProps) {
	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();

		const target = document.querySelector(href);
		if (!target) return;

		const header = document.querySelector('header');
		const headerOffset = header?.clientHeight ?? 64;

		const elementPosition = target.getBoundingClientRect().top;
		const offsetPosition =
			elementPosition + window.scrollY - headerOffset + (isMobile ? -60 : 0);

		let scrollTimeout: number | null = null;

		const handleScrollEnd = () => {
			if (scrollTimeout) clearTimeout(scrollTimeout);

			scrollTimeout = window.setTimeout(() => {
				window.removeEventListener('scroll', handleScrollEnd);
				onNavigate?.();
			}, 120);
		};

		window.addEventListener('scroll', handleScrollEnd);

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth',
		});

		window.history.pushState(null, '', href);
	};

	return (
		<button
			onClick={handleClick}
			className={cx(navItemVariants({ isActive, isMobile }), className)}
		>
			{label}
			{isActive &&
				(isMobile ? (
					<motion.div
						initial={{ opacity: 0, y: 4 }}
						animate={{ opacity: 1, y: 0 }}
						className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-px w-full rounded-full bg-ink-subtle"
					/>
				) : (
					<motion.div
						layoutId="underline"
						className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-px w-full rounded-full bg-ink-subtle"
						transition={{ type: 'spring', stiffness: 500, damping: 30 }}
					/>
				))}
		</button>
	);
}
