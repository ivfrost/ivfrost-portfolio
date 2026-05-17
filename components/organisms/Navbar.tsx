'use client';

import { useState, useEffect } from 'react';
import NavItem, { NavLinkData } from '../molecules/NavItem';

interface NavbarProps {
	items: NavLinkData[];
	variant?: 'light' | 'dark';
}

export default function Navbar({ items, variant = 'light' }: NavbarProps) {
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
				{ threshold: 0.3 },
			);

			observer.observe(el);
			observers.push(observer);
		});

		return () => observers.forEach((o) => o.disconnect());
	}, [items]);

	return (
		<nav className="flex items-center gap-8 px-6 py-4 max-w-fit font-mono bg-transparent">
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
