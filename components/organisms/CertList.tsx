import CertEntry from '../molecules/CertEntry';

export interface CertListProps {
	items: {
		title: string;
		issuer: string;
		date: string;
		href?: string;
	}[];
}

export default function CertList({ items }: CertListProps) {
	const groupedItems = items.reduce<Record<string, CertListProps['items']>>(
		(groups, item) => {
			if (!groups[item.issuer]) {
				groups[item.issuer] = [];
			}

			groups[item.issuer].push(item);
			return groups;
		},
		{},
	);

	return (
		<div className="divide-y divide-border space-y-6">
			{Object.entries(groupedItems).map(([issuer, issuerItems]) => (
				<section className="pb-6 space-y-4" key={issuer + issuerItems[0].title}>
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
	);
}
