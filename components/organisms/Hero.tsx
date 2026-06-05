import Container from '../layout/Container';

interface HeroProps {
	name?: string;
	role?: string;
	stack?: string[];
	openTo?: string;
	location?: string;
	className?: string;
}

export default function Hero({
	name,
	role,
	stack = [],
	openTo,
	location,
	className,
}: HeroProps) {
	return (
		<section
			className={`pt-16 pb-0 bg-background border-b border-border ${className}`}
		>
			<Container>
				{/* Name + status */}
				<div className="mb-8">
					<h1 className="text-4xl -ml-1 lg:text-6xl font-normal tracking-tight text-ink-mid leading-none mb-2">
						{name}
					</h1>
					<p className="font-sans text-lg lg:text-xl text-text-meta tracking-wider">
						{role}
					</p>
				</div>

				{/* Three column strip */}
				<div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 border-t border-border py-8">
					<div>
						<span className="font-mono text-base tracking-wider text-text-meta mb-2 lowercase block">
							Stack
						</span>
						<p className="text-sm text-text-muted leading-relaxed space-x-2">
							{stack.length > 0 ? stack.join(' · ') : 'No stack information'}
						</p>
					</div>

					<div className="sm:justify-self-start">
						<span className="font-mono text-base tracking-wider text-text-meta mb-2 lowercase block">
							Estado
						</span>
						<p className="text-sm text-text-muted leading-relaxed">
							Abierto a {openTo || 'oportunidades'}
							<br />
							{location || 'Ubicación no especificada'}
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
}
