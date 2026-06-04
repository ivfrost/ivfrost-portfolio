'use client';

import { useState, useEffect } from 'react';
import NavItem, { NavLinkData } from '../molecules/NavItem';

interface NavbarProps {
	items: NavLinkData[];
}

export default function Navbar({ items }: NavbarProps) {
	const [activeHref, setActiveHref] = useState('');

	useEffect(() => {
		const observers: IntersectionObserver[] = [];

		items.forEach(({ href }) => {
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

	return (
		<nav className="flex gap-4 sm:gap-8 py-4 justify-between sm:justify-center font-mono bg-transparent w-full sm:w-auto">
			{items.map((item) => (
				<NavItem
					key={item.href}
					label={item.label}
					href={item.href}
					isActive={activeHref === item.href}
				/>
			))}
		</nav>
	);
}
