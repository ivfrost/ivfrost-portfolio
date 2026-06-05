'use client';
import CertEntry from '../molecules/CertEntry';
import { useState } from 'react';

export interface CertListProps {
	items: {
		title: string;
		issuer: string;
		date: string;
		href?: string;
		pinned?: boolean;
	}[];
}

export default function CertList({ items }: CertListProps) {
	const pinnedItems = items.filter((item) => !!item.pinned);

	const groupedItems = items
		.filter((item) => !item.pinned)
		.reduce<Record<string, CertListProps['items']>>((groups, item) => {
			if (!groups[item.issuer]) {
				groups[item.issuer] = [];
			}
			groups[item.issuer].push(item);
			return groups;
		}, {});

	return (
		<>
			<div className="pb-8">
				<section>
					<h3 className="font-mono text-base tracking-wider text-text-meta mb-6">
						certificaciones
					</h3>
					<h4 className="font-mono text-sm  tracking-wider text-text-meta-lite mb-6">
						destacadas
					</h4>
					<div className="divide-y divide-border space-y-6">
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
											? issuerNoBrackets + ` · ${item.date}`
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
			<div className="pt-8">
				{Object.entries(groupedItems).map(([issuer, issuerItems]) => (
					<section className="pb-6" key={issuer + issuerItems[0].title}>
						<h3 className="font-mono text-sm tracking-wider text-text-meta-lite mb-6">
							{issuer}
						</h3>
						<div className="divide-y divide-border space-y-6">
							{issuerItems.map((item) => (
								<CertEntry
									key={item.title}
									title={item.title}
									titleMeta={item.date}
									credentialUrl={item.href}
								/>
							))}
						</div>
					</section>
				))}
			</div>
		</>
	);
}
