'use client';

import { useEffect, useState } from 'react';
import NavItem, { NavLinkData } from '../molecules/NavItem';

interface NavbarProps {
	items: NavLinkData[];
	isMobile?: boolean;
	onNavigate?: () => void;
}

export default function Navbar({ items, isMobile, onNavigate }: NavbarProps) {
	const [activeHref, setActiveHref] = useState('');

	useEffect(() => {
		const observers: IntersectionObserver[] = [];

		items.forEach(({ href, noActive }) => {
			if (noActive) return;
			if (!href.startsWith('#')) {
				return;
			}
			const id = href.replace('#', '');
			const el = document.getElementById(id);
			if (!el) return;

			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) setActiveHref(href);
				},
				{
					rootMargin: '-30% 0px -70% 0px',
					threshold: 0,
				},
			);

			observer.observe(el);
			observers.push(observer);
		});

		return () => observers.forEach((o) => o.disconnect());
	}, [items]);

	useEffect(() => {
		const handleScroll = () => {
			const nearBottom =
				window.innerHeight + window.scrollY >= document.body.offsetHeight - 20;
			if (nearBottom) {
				const item = items[items.length - 1];
				if (!item.noActive) setActiveHref(item.href);
			} else if (activeHref === items[items.length - 1].href) {
				const item = items[items.length - 2];
				if (!item.noActive) setActiveHref(item.href);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [items, activeHref]);

	return (
		<nav
			className={`flex gap-4 sm:gap-8 py-4 justify-between sm:justify-center font-mono bg-transparent w-full sm:w-auto ${isMobile ? 'flex-col gap-8' : ''}`}
		>
			{items.map((item) => (
				<NavItem
					key={item.href}
					label={item.label}
					href={item.href}
					isMobile={isMobile}
					isActive={activeHref === item.href}
					onNavigate={onNavigate}
					noActive={item.noActive}
				/>
			))}
		</nav>
	);
}
