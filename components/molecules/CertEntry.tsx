'use client';
import { BsArrowUpRight } from 'react-icons/bs';
import { GoPin } from 'react-icons/go';
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
				pinned || credentialUrl ? (
					<>
						{pinned && <GoPin size={12} className="text-text-meta" />}
						{credentialUrl && (
							<BsArrowUpRight size={12} className="text-text-meta" />
						)}
					</>
				) : undefined
			}
			titleMeta={computedMeta}
			onClick={() => credentialUrl && window.open(credentialUrl, '_blank')}
		>
			{!dateMeta && date && <p className="text-xs">{date}</p>}
		</Entry>
	);
}
