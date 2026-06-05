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
					'sticky top-0 z-50 w-full h-16 flex items-center border-b border-border',
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
					'sticky top-0 left-0 z-50 flex items-center border-b-transparent w-full',
					'text-text-meta sm:hidden bg-background gap-px',
					isOpen ? 'bg-background-nav-open' : 'bg-background',
					className,
				)}
			>
				<Button
					onClick={() => setIsOpen(!isOpen)}
					type="button"
					variant="ghost"
					modifier="icon-only"
					className="z-60 bg-transparent m-2 p-2"
				>
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

				{showNameInMobileBar && !isOpen && (
					<Link href="/">
						<span className="font-mono text-base tracking-wider capitalize hover:text-ink transition-colors">
							pablo villena
						</span>
					</Link>
				)}

				<AnimatePresence>
					{isOpen && (
						<motion.nav
							initial={{ x: '-100%' }}
							animate={{ x: 0 }}
							exit={{ x: '-100%' }}
							transition={{ duration: 0.2 }}
							className="fixed top-0 left-0 bg-background-nav h-full flex flex-col justify-between pt-3 pb-13 px-15 gap-10 text-lg shadow-lg shadow-ink/16 rounded-md z-50"
						>
							<div className="flex flex-col gap-8">
								<Link href="/">
									<span className="font-mono text-base tracking-wider capitalize hover:text-ink transition-colors">
										pablo villena
									</span>
								</Link>

								<Navbar
									items={items}
									isMobile
									onNavigate={() => setIsOpen(false)}
								/>
							</div>

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
