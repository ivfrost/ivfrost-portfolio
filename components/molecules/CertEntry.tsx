'use client';
import Entry from './Entry';
import { TbFileCertificate } from 'react-icons/tb';

interface CertEntryProps {
	title: string;
	titleMeta?: string;
	date?: string;
	dateMeta?: boolean;
	issuer?: string;
	credentialUrl?: string;
	ref?: React.Ref<HTMLDivElement>;
}

export default function CertEntry({
	title,
	titleMeta,
	date,
	dateMeta,
	issuer,
	credentialUrl,
	ref,
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
			ref={ref}
			className="cert-entry"
			title={title}
			titleIcons={
				credentialUrl ? (
					<TbFileCertificate
						size={15}
						strokeWidth={1.75}
						className="ml-1.5 inline-flex"
					/>
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
