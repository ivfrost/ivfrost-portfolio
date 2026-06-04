'use client';

import Container from '../layout/Container';
import type { NavLinkData } from '../molecules/NavItem';
import Navbar from './Navbar';
import { Mail, Menu } from 'lucide-react';
import { TbBrandLinkedin, TbBrandGithub } from 'react-icons/tb';
import { cx } from 'class-variance-authority';
import Link from 'next/link';
import Button from '../atoms/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
	items: NavLinkData[];
	logo?: React.ReactNode;
	className?: string;
}

export default function Header({ items, logo, className }: HeaderProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<header
				className={cx(
					'sticky top-0 z-50 w-full h-16 flex items-center border-b border-border',
					'bg-background text-text-meta hidden sm:flex',
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
									className="font-mono text-sm tracking-wider
						 lowercase"
								>
									pablo villena
								</span>
							</Link>
						)}
					</span>

					<Navbar items={items} />

					<div className="hidden sm:flex gap-5 items-center">
						<a
							href="https://github.com/ivfrost"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-ink transition-colors"
						>
							<TbBrandGithub strokeWidth={1.5} size={20} />
						</a>
						<a
							href="https://www.linkedin.com/in/pablo-villena-ariza-88910b3a2/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-ink transition-colors"
						>
							<TbBrandLinkedin strokeWidth={1.5} size={20} />
						</a>
						<a
							href="mailto:vlpablo@proton.me"
							className="hover:text-ink transition-colors"
						>
							<Mail strokeWidth={1.5} size={20} />
						</a>
					</div>
				</Container>
			</header>
			<header
				className={cx(
					'sticky top-0 left-0 z-50 flex items-center',
					'text-text-meta sm:hidden',
					className,
				)}
			>
				<Button
					onClick={() => setIsOpen(!isOpen)}
					type="button"
					variant="ghost"
					modifier="icon-only"
					className="bg-button m-2"
				>
					{' '}
					<AnimatePresence mode="wait">
						{isOpen ? (
							<motion.div
								key="x"
								initial={{ rotate: -90, opacity: 0 }}
								animate={{ rotate: 0, opacity: 1 }}
								exit={{ rotate: 90, opacity: 0 }}
								transition={{ duration: 0.15 }}
							>
								<X size={24} />
							</motion.div>
						) : (
							<motion.div
								key="menu"
								initial={{ rotate: 90, opacity: 0 }}
								animate={{ rotate: 0, opacity: 1 }}
								exit={{ rotate: -90, opacity: 0 }}
								transition={{ duration: 0.15 }}
							>
								<Menu size={24} />
							</motion.div>
						)}
					</AnimatePresence>
				</Button>
			</header>
		</>
	);
}
