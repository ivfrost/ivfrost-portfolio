'use client';
import { ChevronDown } from 'lucide-react';
import CertEntry from '../molecules/CertEntry';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from '../atoms/Button';

export interface CertListProps {
	items: {
		title: string;
		issuer: string;
		date: string;
		href?: string;
		pinned?: boolean;
	}[];
}
const formatDate = (date: string) => {
	const [year, month] = date.split('-');
	return new Date(parseInt(year), parseInt(month) - 1).toLocaleDateString(
		'es-ES',
		{ month: 'short', year: 'numeric' },
	);
};

export default function CertList({ items }: CertListProps) {
	const pinnedItems = items.filter((item) => !!item.pinned);
	const recentItems = items
		.filter((item) => !item.pinned)
		.sort((a, b) => b.date.localeCompare(a.date));
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className="pb-12">
				<section>
					<h3 className="font-mono text-lg tracking-wider text-text-meta-lite mb-10 lowercase block">
						certificaciones
					</h3>
					<div className="divide-y divide-border-subtle space-y-6">
						<h4 className="font-mono text-sm tracking-wider text-text-meta-lite mb-4 pb-1 lowercase block">
							destacadas
						</h4>
						{pinnedItems.map((item, idx) => {
							const issuerNoBrackets = item.issuer
								.replace(/\(.*?\)/g, '')
								.trim();
							return (
								<CertEntry
									key={item.title + idx}
									title={item.title}
									titleMeta={
										item.date
											? issuerNoBrackets + ` · ${formatDate(item.date)}`
											: issuerNoBrackets
									}
									credentialUrl={item.href}
									pinned={item.pinned}
								/>
							);
						})}
					</div>
				</section>
			</div>
			<div>
				<section>
					<div className="space-y-6">
						<h4 className="font-mono text-sm tracking-wider text-text-meta-lite mb-4 pb-1 lowercase block border-b border-border-subtle">
							más recientes
						</h4>
						<motion.div
							initial={false}
							animate={{
								height: isOpen ? 'auto' : recentItems.length > 5 ? 470 : 'auto',
							}}
							style={{ overflow: 'hidden' }}
							className="divide-y divide-border-subtle space-y-6"
						>
							{recentItems.map((item, idx) => {
								const issuerNoBrackets = item.issuer
									.replace(/\(.*?\)/g, '')
									.trim();
								return (
									<CertEntry
										key={item.title + idx}
										title={item.title}
										titleMeta={
											item.date
												? issuerNoBrackets + ` · ${item.date}`
												: issuerNoBrackets
										}
										credentialUrl={item.href}
									/>
								);
							})}
						</motion.div>
						<Button
							type="button"
							variant="outline"
							size="small"
							onClick={() => setIsOpen(!isOpen)}
							className={`w-full sm:w-auto sm:ml-auto mt-6 ${
								recentItems.length > 5 ? 'block' : 'hidden'
							}`}
						>
							<div className="flex items-center w-full justify-center">
								<span>{isOpen ? 'Mostrar menos' : 'Mostrar más'}</span>
								<ChevronDown
									size={16}
									className={`ml-2 transition-transform ${
										isOpen ? 'rotate-180' : 'rotate-0'
									}`}
								/>
							</div>
						</Button>
						{recentItems.length === 0 && (
							<p className="text-sm text-muted">
								No hay certificaciones recientes para mostrar.
							</p>
						)}
					</div>
				</section>
				{items.length === 0 && (
					<p className="text-sm text-muted">
						No hay certificaciones para mostrar.
					</p>
				)}
			</div>
		</>
	);
}
