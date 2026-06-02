import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';

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
				<section key={issuer} className="pb-6 space-y-4">
					<h3 className="font-mono text-xs uppercase tracking-wider text-text-meta">
						{issuer}
					</h3>
					<div className="space-y-6">
						{issuerItems.map((item) => {
							const content = (
								<div className="relative flex flex-col gap-3 pr-24">
									<span className="absolute right-0 top-0 text-xs text-text-meta">
										{item.date}
									</span>
									<h4 className="text-base lg:text-md font-base text-text-muted flex items-center gap-2 group-hover:underline group-hover:decoration-text-muted underline-offset-4">
										<span>{item.title}</span>
										{item.href && (
											<BsArrowUpRight size={12} className="text-text-meta" />
										)}
									</h4>
								</div>
							);

							return (
								<div key={item.title} className="group">
									{item.href ? (
										<Link
											href={item.href}
											target="_blank"
											rel="noopener noreferrer"
											className="block"
										>
											{content}
										</Link>
									) : (
										content
									)}
								</div>
							);
						})}
					</div>
				</section>
			))}
		</div>
	);
}
