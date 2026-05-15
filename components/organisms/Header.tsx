'use client';

import Container from '../layout/Container';
import type { NavLinkData } from '../molecules/NavItem';
import Navbar from './Navbar';

interface HeaderProps {
	items: NavLinkData[];
	logo?: React.ReactNode;
	className?: string;
}

export default function Header({ items, logo, className }: HeaderProps) {
	const baseStyles = `sticky top-0 z-50 w-full border-b
   border-frost-4 bg-frost-1/70 backdrop-blur-md`;

	return (
		<header className={`${baseStyles} ${className}`}>
			<Container className="flex justify-between">
				{(logo && <div className="py-4">{logo}</div>) || (
					<div className="h-8 w-8 rounded-full bg-sage-1" />
				)}

				<Navbar items={items} />
			</Container>
		</header>
	);
}
