'use client';
import { ExternalLink } from 'lucide-react';
import Entry from './Entry';

interface CertEntryProps {
	title: string;
	titleMeta?: string;
	date?: string;
	dateMeta?: boolean;
	issuer?: string;
	pinned?: boolean;
	credentialUrl?: string;
}

export default function CertEntry({
	title,
	titleMeta,
	date,
	dateMeta,
	issuer,
	pinned,
	credentialUrl,
}: CertEntryProps) {
	const issuerNoBrackets = issuer
		? issuer.replace(/\(.*?\)/g, '').trim()
		: null;

	const computedMeta =
		[titleMeta ?? issuerNoBrackets, dateMeta && date ? date : null]
			.filter(Boolean)
			.join(' · ') || undefined;

	return (
		<Entry
			title={title}
			titleIcons={
				credentialUrl ? (
					<ExternalLink size={14} className="ml-1.5 inline-flex" />
				) : undefined
			}
			titleMeta={computedMeta}
			onClick={
				credentialUrl ? () => window.open(credentialUrl, '_blank') : undefined
			}
		>
			{!dateMeta && date && <p className="text-xs">{date}</p>}
		</Entry>
	);
}
