'use client';

import { cva } from 'class-variance-authority';
import DiamondSVG from '../atoms/DiamondSVG';

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
		'flex items-center gap-2 uppercase font-medium tracking-widest',
		'transition-colors font-mono text-ink-lite',
	],
	{
		variants: {
			isActive: {
				true: 'hover:text-ink-lite cursor-default',
				false: 'hover:text-ink',
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
		target?.scrollIntoView({ behavior: 'smooth' });
		window.history.pushState(null, '', href);
	};

	return (
		<button
			onClick={handleClick}
			className={navItemVariants({ isActive, className })}
		>
			{isActive && <DiamondSVG size="0.6em" className="shrink-0" />}
			{label}
		</button>
	);
}
