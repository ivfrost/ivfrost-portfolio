'use client';
import { BiMailSend } from 'react-icons/bi';
import Button from '../atoms/Button';
import Container from '../layout/Container';
import { TbMailSpark } from 'react-icons/tb';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { BsArrowRight } from 'react-icons/bs';

interface HeroProps {
	name?: string;
	role?: string;
	about?: string;
	stack?: string[];
	openTo?: string;
	location?: string;
	className?: string;
}

export default function Hero({
	name,
	role,
	about,
	stack = [],
	openTo,
	location,
	className,
}: HeroProps) {
	return (
		<section
			className={`pt-16 pb-8 bg-background border-b border-border ${className}`}
		>
			<Container>
				<div className="flex flex-col gap-8">
					<div>
						<h1 className="text-4xl -ml-0.5 lg:text-6xl font-normal tracking-tight text-ink leading-none mb-2">
							{name}
						</h1>
						<h2 className="text-ink-subtle-lite capitalize">{role}</h2>
					</div>

					{about && (
						<div className="flex flex-col sm:flex-row sm:justify-between gap-4">
							<p className="text-sm text-ink-subtle leading-relaxed max-w-prose">
								{about}
							</p>
							<Button
								variant="outline"
								type="button"
								size="small"
								className="self-start shrink-0 w-full sm:w-auto"
								onClick={() =>
									document
										.getElementById('contact')
										?.scrollIntoView({ behavior: 'smooth' })
								}
							>
								<span>Contáctame</span>
								<BsArrowRight size={14} className="ml-2" />
							</Button>
						</div>
					)}

					<div className="flex flex-col sm:flex-row gap-8 border-t border-border pt-6">
						<div className="flex-1">
							<h4 className="mb-2 text-base text-text-meta-lite">stack</h4>
							<p>
								{stack.length > 0 ? stack.join(' · ') : 'No stack information'}
							</p>
						</div>
						<div className="flex-1">
							<h4 className="mb-2 text-base text-text-meta-lite">estado</h4>
							<p>
								Abierto a {openTo || 'oportunidades'}
								<br />
								{location || 'Ubicación no especificada'}
							</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
