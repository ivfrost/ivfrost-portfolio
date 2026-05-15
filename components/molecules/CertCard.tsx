import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Card from './Card';

interface CertCardProps {
	title: string;
	issuer: string;
	date: string;
	hasLeftRule?: boolean;
	credentialUrl?: string;
}

export default function CertCard({
	title,
	issuer,
	date,
	hasLeftRule = false,
	credentialUrl,
}: CertCardProps) {
	const content = (
		<div className="flex flex-col gap-1">
			<span className="text-sage-5 font-base">{issuer}</span>
			<span className="text-sage-5 font-base">{date}</span>
			{credentialUrl && (
				<span className="absolute bottom-0 right-0 flex items-center gap-1 px-2 py-1 border-l border-t border-frost-4 text-sage-4">
					<span className="font-mono text-xs tracking-widest uppercase">
						verified
					</span>
					<ExternalLink className="w-3 h-3" />
				</span>
			)}
		</div>
	);

	if (credentialUrl) {
		return (
			<Link
				href={credentialUrl}
				target="_blank"
				rel="noopener noreferrer"
				className="block"
			>
				<Card
					title={title}
					hasLeftRule={hasLeftRule}
					content={content}
					className={`${credentialUrl ? 'hover:bg-sage-4/10 hover:outline-ink-lite hover:border-ink-lite' : ''}`}
				/>
			</Link>
		);
	}

	return <Card title={title} hasLeftRule={hasLeftRule} content={content} />;
}
