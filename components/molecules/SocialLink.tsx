import type { SocialLinkData } from '@/data/types';

export interface SocialLinkProps extends SocialLinkData {
	isMobile?: boolean;
}

export default function SocialLink({
	href,
	label,
	icon: Icon,
	isMobile,
}: SocialLinkProps) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="text-text-meta hover:text-ink transition-colors"
		>
			<span className="sr-only">{label}</span>
			<Icon size={isMobile ? 26 : 20} strokeWidth={1.5} />
		</a>
	);
}
