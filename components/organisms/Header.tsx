'use client';

import Container from '../layout/Container';
import type { NavLinkData } from '../molecules/NavItem';
import Navbar from './Navbar';
import { Menu } from 'lucide-react';
import { cx } from 'class-variance-authority';
import Link from 'next/link';
import Button from '../atoms/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Socialbar from '../organisms/Socialbar';
import socials from '@/data/socials';

interface HeaderProps {
	items: NavLinkData[];
	logo?: React.ReactNode;
	className?: string;
}

export default function Header({ items, logo, className }: HeaderProps) {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

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
						 lowercase hover:text-ink transition-colors"
								>
									pablo villena
								</span>
							</Link>
						)}
					</span>
					<Navbar items={items} />
					<Socialbar socials={socials} />
				</Container>
			</header>
			<header
				className={cx(
					'sticky top-0 left-0 z-50 flex items-center',
					'text-text-meta sm:hidden bg-background',
					isOpen ? 'bg-background-nav-open' : 'bg-background',
					className,
				)}
			>
				<Button
					onClick={() => setIsOpen(!isOpen)}
					type="button"
					variant="ghost"
					modifier="icon-only"
					className="z-50 bg-background shadow-sm shadow-ink/16 rounded-md m-2 p-2"
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
				<AnimatePresence>
					{isOpen && (
						<motion.nav
							initial={{ x: '-100%' }}
							animate={{ x: 0 }}
							exit={{ x: '-100%' }}
							transition={{ duration: 0.2 }}
							className="fixed top-0 left-0 bg-background-nav h-full flex flex-col justify-between pt-26 pb-13 px-18 gap-10 text-lg shadow-lg shadow-ink/16 rounded-md"
						>
							<Navbar
								items={items}
								isMobile
								onNavigate={() => setIsOpen(false)}
							/>
							<Socialbar isMobile socials={socials} />
						</motion.nav>
					)}
				</AnimatePresence>
			</header>
			{isOpen && (
				<div
					className="fixed inset-0 bg-ink/40 z-40"
					onClick={() => setIsOpen(false)}
				/>
			)}
		</>
	);
}
