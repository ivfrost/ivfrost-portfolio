'use client';

import Container from '../layout/Container';
import type { NavLinkData } from '../molecules/NavItem';
import Navbar from './Navbar';
import { Menu, X } from 'lucide-react';
import { cx } from 'class-variance-authority';
import Link from 'next/link';
import Button from '../atoms/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Socialbar from '../organisms/Socialbar';
import socials from '@/data/socials';
import { MenuToggle } from '../atoms/MenuToggle';

interface HeaderProps {
	items: NavLinkData[];
	className?: string;
}

export default function Header({ items, className }: HeaderProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [showNameInMobileBar, setShowNameInMobileBar] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const threshold = 80;
			setShowNameInMobileBar(window.scrollY > threshold);
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

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
					'sticky top-0 z-50 w-full flex items-center outline-b outline-border',
					'bg-background text-text-meta hidden sm:flex',
					className,
				)}
			>
				<Container className="flex justify-between items-center w-full">
					<Navbar items={items} />
					<Socialbar socials={socials} />
				</Container>
			</header>

			{/* MOBILE HEADER */}
			<header
				className={cx(
					'sticky top-0 left-0 min-h-12 z-50 flex items-center border-b border-border',
					'text-text-meta sm:hidden bg-background gap-px',
					className,
				)}
			>
				<MenuToggle
					isOpen={isOpen}
					onClick={() => setIsOpen(!isOpen)}
					className="p-4"
				/>

				{showNameInMobileBar && !isOpen && (
					<Link href="/">
						<span className="font-mono text-base tracking-wider capitalize hover:text-ink transition-colors">
							pablo villena
						</span>
					</Link>
				)}
			</header>
			<AnimatePresence>
				{isOpen && (
					<motion.nav
						initial={{ x: '-100%' }}
						animate={{ x: 0 }}
						exit={{ x: '-100%' }}
						transition={{ duration: 0.2 }}
						className="fixed top-0 left-0 bg-background-nav h-full flex flex-col justify-between text-lg shadow-lg shadow-ink/16 z-90"
					>
						<div className="flex justify-start items-center">
							<MenuToggle
								isOpen={isOpen}
								onClick={() => setIsOpen(!isOpen)}
								className="p-4"
							/>
							<Link href="/">
								<span className="font-mono text-base tracking-wider capitalize hover:text-ink transition-colors">
									pablo villena
								</span>
							</Link>
						</div>

						<div className="h-full flex flex-col justify-between px-14">
							<div className="flex flex-col h-full justify-center">
								<Navbar
									items={items}
									isMobile
									onNavigate={() => setIsOpen(false)}
								/>
							</div>

							<Socialbar isMobile socials={socials} className="py-10" />
						</div>
					</motion.nav>
				)}
			</AnimatePresence>
			{isOpen && (
				<div
					className="fixed inset-0 bg-ink/40 z-80"
					onClick={() => setIsOpen(false)}
				/>
			)}
		</>
	);
}
