import SocialLink from '../molecules/SocialLink';
import type { SocialLinkData } from '@/data/types';

interface SocialbarProps {
	socials: SocialLinkData[];
	isMobile?: boolean;
	className?: string;
}

export default function Socialbar({
	socials,
	isMobile,
	className,
}: SocialbarProps) {
	return (
		<div
			className={`flex items-center ${isMobile ? 'justify-center gap-6' : 'justify-end gap-5 '} ${className}`}
		>
			{socials.map((social) => (
				<SocialLink
					key={social.href}
					href={social.href}
					label={social.label}
					isMobile={isMobile}
					icon={social.icon}
				/>
			))}
		</div>
	);
}
