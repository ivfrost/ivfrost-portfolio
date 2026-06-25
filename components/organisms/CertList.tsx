'use client';
import { ChevronDown } from 'lucide-react';
import CertEntry from '../molecules/CertEntry';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Button from '../atoms/Button';
import { formatDate } from '@/lib/utils';

export interface CertListProps {
	items: {
		title: string;
		issuer: string;
		date: string;
		href?: string;
		pinned?: boolean;
	}[];
	heading?: string;
	featuredLabel?: string;
	recentLabel?: string;
	showMoreText?: string;
	showLessText?: string;
}

export default function CertList({
	items,
	heading,
	featuredLabel,
	recentLabel,
	showMoreText,
	showLessText,
}: CertListProps) {
	const pinnedItems = items.filter((item) => !!item.pinned);
	const recentItems = items
		.filter((item) => !item.pinned)
		.sort((a, b) => b.date.localeCompare(a.date));
	const [isOpen, setIsOpen] = useState(false);
	const firstEntryRef = useRef<HTMLDivElement>(null);
	const fourthEntryRef = useRef<HTMLDivElement>(null);
	const [entriesHeight, setEntriesHeight] = useState(70);

	useEffect(() => {
		if (firstEntryRef.current && fourthEntryRef.current) {
			const entryOneTop = firstEntryRef.current.getBoundingClientRect().top;
			const entryFourBottom =
				fourthEntryRef.current.getBoundingClientRect().bottom;
			const entryHeight = entryFourBottom - entryOneTop;
			setEntriesHeight(entryHeight - 1);
		}
	}, []);

	return (
		<>
			<div className="pb-12">
				<section>
					<h3 className="font-mono text-lg tracking-wider text-text-meta-lite mb-10 lowercase block">
						{heading}
					</h3>
					<div className="divide-y divide-border-subtle space-y-6">
						<h4 className="font-mono text-sm tracking-wider text-text-meta-lite mb-4 pb-1 lowercase block">
							{featuredLabel}
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
							{recentLabel}
						</h4>
						<motion.div
							initial={false}
							animate={{
								height: isOpen
									? 'auto'
									: recentItems.length > 5
										? `${entriesHeight}px`
										: 'auto',
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
										ref={
											idx === 0
												? firstEntryRef
												: idx === 3
													? fourthEntryRef
													: null
										}
										key={item.title + idx}
										title={item.title}
										titleMeta={
											item.date
												? issuerNoBrackets + ` · ${formatDate(item.date)}`
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
							<div className="flex items-center justify-center text-ink-subtle hover:text-ink transition-colors">
								<span>{isOpen ? showLessText : showMoreText}</span>
								<ChevronDown
									size={17}
									strokeWidth={1.5}
									className={`ml-2 transition-transform text-ink-subtle ${
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
