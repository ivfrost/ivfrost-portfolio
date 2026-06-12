import { BsDownload } from 'react-icons/bs';
import type { SocialLinkData } from '../../data/types';
import Container from '../layout/Container';

export interface FooterProps {
	socialLinks?: SocialLinkData[];
	name?: string;
	cvLink?: string;
	className?: string;
	downloadCvText?: string;
	builtWithText?: string;
}

export default function Footer({
	socialLinks = [],
	name,
	cvLink,
	className,
	downloadCvText,
	builtWithText,
}: FooterProps) {
	return (
		<footer className={`py-8 bg-background-alt ${className}`}>
			<Container className="grid gap-4 grid-cols-3 items-center sm:flex">
				<div className="gap-4 sm:hidden flex w-full col-span-3 sm:col-span-1 items-center justify-between">
					{cvLink && (
						<a
							href={cvLink}
							target="_blank"
							rel="noopener noreferrer"
							className=" text-ink-subtle hover:text-ink transition-colors text-xs"
						>
							{downloadCvText}
							<BsDownload size={12} className="inline ml-1 mb-0.5" />
						</a>
					)}
					<div className="flex sm:hidden gap-4">
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
				</div>
				<div className="gap-2 sm:order-1 flex items-center justify-between w-full col-span-3">
					<div className="gap-2 items-center hidden sm:flex">
						<p className="text-xs w-full flex-1 text-ink-subtle">
							&copy; {new Date().getFullYear()} {name ?? ''}
						</p>
					</div>
					<span className="text-text-meta-lite hidden sm:flex">·</span>
					<div className="gap-4 flex-1 hidden sm:flex w-full col-span-3 sm:col-span-1 items-center justify-between">
						{cvLink && (
							<a
								href={cvLink}
								target="_blank"
								rel="noopener noreferrer"
								className=" text-ink-subtle hover:text-ink transition-colors text-xs"
							>
								{downloadCvText}{' '}
								<BsDownload size={12} className="inline mb-0.5 ml-1" />
							</a>
						)}
					</div>
					<p className="text-xs text-ink-subtle col-span-3 text-center mt-4 sm:mt-0 hidden sm:block">
						{builtWithText}{' '}
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
				<div className="gap-2 items-center flex w-full sm:hidden col-span-3 justify-between">
					<p className="text-xs text-ink-subtle">
						&copy; {new Date().getFullYear()} {name ?? ''}
					</p>
					<p className="text-xs text-ink-subtle col-span-3 text-center">
						{builtWithText}{' '}
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
