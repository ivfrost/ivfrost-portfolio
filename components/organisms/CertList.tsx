import CertEntry from '../molecules/CertEntry';

export interface CertListProps {
	items: {
		title: string;
		issuer: string;
		date: string;
		href?: string;
		pinned: boolean;
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
			<div className="space-y-6 border-b border-border pb-8">
				<h3 className="font-mono text-xs uppercase tracking-wider text-text-meta">
					PINNED
				</h3>
				{pinnedItems.map((item, idx) => (
					<CertEntry
						key={item.title + idx}
						title={item.title}
						date={item.date}
						issuer={item.issuer}
						credentialUrl={item.href}
						pinned
					/>
				))}
			</div>
			<div className="space-y-6 pt-8">
				{Object.entries(groupedItems).map(([issuer, issuerItems]) => (
					<section
						className="pb-6 space-y-6"
						key={issuer + issuerItems[0].title}
					>
						<h3 className="font-mono text-xs uppercase tracking-wider text-text-meta">
							{issuer}
						</h3>
						<div className="space-y-6">
							{issuerItems.map((item) => (
								<CertEntry
									key={item.title}
									title={item.title}
									date={item.date}
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
