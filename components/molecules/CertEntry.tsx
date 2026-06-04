import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';
import { GoPin } from 'react-icons/go';

interface CertEntryProps {
	title: string;
	date: string;
	issuer?: string;
	pinned?: boolean;
	credentialUrl?: string;
}

export default function CertEntry({
	title,
	date,
	issuer,
	pinned,
	credentialUrl,
}: CertEntryProps) {
	const content = (
		<div className="relative flex flex-col gap-3 pr-24">
			<h4
				className={`text-base lg:text-md font-base text-text-muted flex items-center gap-2 ${credentialUrl ? 'group-hover:underline' : null} group-hover:decoration-text-muted underline-offset-4`}
			>
				<span>{title}</span>
				{pinned && <GoPin size={12} className="text-text-meta" />}
				{credentialUrl && (
					<BsArrowUpRight size={12} className="text-text-meta ml-1.5" />
				)}
			</h4>

			<span className="absolute flex items-center gap-x-2 right-0 top-0 text-xs text-text-meta">
				{pinned ? <p className="text-text-meta">{issuer} ·</p> : null}
				{date}
			</span>
		</div>
	);

	return (
		<div className="group">
			{credentialUrl ? (
				<Link
					href={credentialUrl}
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
}
