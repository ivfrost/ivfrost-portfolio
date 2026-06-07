import { BsDownload } from 'react-icons/bs';
import type { SocialLinkData } from '../../data/types';
import Container from '../layout/Container';

export interface FooterProps {
	socialLinks?: SocialLinkData[];
	name?: string;
	cvLink?: string;
	className?: string;
}

export default function Footer({
	socialLinks = [],
	name,
	cvLink,
	className,
}: FooterProps) {
	console.log(typeof socialLinks, Array.isArray(socialLinks), socialLinks);
	return (
		<footer className={`py-8 bg-background-alt ${className}`}>
			<Container>
				<div className="gap-4 flex sm:hidden">
					{socialLinks.map((link) => {
						const Icon = link.icon;
						return (
							<a
								key={link.label}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={link.label}
								className="text-ink-subtle hover:text-ink focus-visible:text-ink focus:outline-none"
							>
								{link.icon ? <Icon size={20} /> : link.label}
							</a>
						);
					})}
				</div>
				<div className="gap-4 flex items-center justify-between w-full">
					<div className="gap-2 flex items-center">
						<p className="text-xs text-ink-subtle">
							&copy; {new Date().getFullYear()} {name ?? ''}
						</p>
						{cvLink && <span className="text-text-meta-lite"> · </span>}
						{cvLink && (
							<a
								href={cvLink}
								target="_blank"
								rel="noopener noreferrer"
								className="text-ink-subtle hover:text-ink transition-colors text-xs"
							>
								Descargar CV{' '}
								<BsDownload size={12} className="inline ml-1 mb-0.5" />
							</a>
						)}
					</div>
					<p className="text-xs text-ink-subtle">
						Creado con{' '}
						<a
							href="https://nextjs.org/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-ink"
						>
							Next.js
						</a>
					</p>
				</div>
			</Container>
		</footer>
	);
}
