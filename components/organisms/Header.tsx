'use client';

import Container from '../layout/Container';
import type { NavLinkData } from '../molecules/NavItem';
import Navbar from './Navbar';
import { Mail } from 'lucide-react';
import { TbBrandLinkedin, TbBrandGithub } from 'react-icons/tb';
import { cx } from 'class-variance-authority';
import Link from 'next/link';

interface HeaderProps {
	items: NavLinkData[];
	logo?: React.ReactNode;
	className?: string;
}

export default function Header({ items, logo, className }: HeaderProps) {
	return (
		<header
			className={cx(
				'sticky top-0 z-50 w-full h-16 flex items-center border-b border-border',
				'bg-background/80 backdrop-blur-md transition-colors',
				className,
			)}
		>
			<Container className="flex justify-between items-center w-full">
				<span className="hidden sm:block">
					{logo ? (
						<Link href="/">{logo}</Link>
					) : (
						<Link href="/">
							<span
								className="font-mono text-sm text-text-meta tracking-wider
						 lowercase"
							>
								pablo villena
							</span>
						</Link>
					)}
				</span>

				<Navbar items={items} />

				<div className="flex gap-5 items-center">
					<a
						href="https://github.com/ivfrost"
						target="_blank"
						rel="noopener noreferrer"
						className="text-text-meta hover:text-ink transition-colors"
					>
						<TbBrandGithub strokeWidth={1.5} size={17} />
					</a>
					<a
						href="https://www.linkedin.com/in/pablo-villena-ariza-88910b3a2/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-text-meta hover:text-ink transition-colors"
					>
						<TbBrandLinkedin strokeWidth={1.5} size={17} />
					</a>
					<a
						href="mailto:vlpablo@proton.me"
						className="text-text-meta hover:text-ink transition-colors"
					>
						<Mail strokeWidth={1.5} size={17} />
					</a>
				</div>
			</Container>
		</header>
	);
}
