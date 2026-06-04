import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';

interface CertEntryProps {
	title: string;
	date: string;
	credentialUrl?: string;
}

export default function CertEntry({
	title,
	date,
	credentialUrl,
}: CertEntryProps) {
	const content = (
		<div className="relative flex flex-col gap-3 pr-24">
			<span className="absolute right-0 top-0 text-xs text-text-meta">
				{date}
			</span>

			<h4 className="text-base lg:text-md font-base text-text-muted flex items-center gap-2 group-hover:underline group-hover:decoration-text-muted underline-offset-4">
				<span>{title}</span>
				{credentialUrl && (
					<BsArrowUpRight size={12} className="text-text-meta" />
				)}
			</h4>
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
