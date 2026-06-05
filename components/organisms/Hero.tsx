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
				<div className="mb-8 text-center sm:text-start">
					<h1 className="text-4xl -ml-0.5 lg:text-6xl capitalize font-normal tracking-tight text-ink-mid leading-none mb-2">
						{name}
					</h1>
					<p className="text-lg font-sans lg:text-xl tracking-wider text-text-meta mb-2 capitalize block">
						{role}
					</p>
				</div>

				{/* Three column strip */}
				<div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 py-8 border-t border-border">
					<div>
						<span className="font-sans text-lg tracking-wider text-text-meta mb-2 lowercase block">
							Stack
						</span>
						<p className="text-sm text-ink-subtle leading-relaxed space-x-2">
							{stack.length > 0 ? stack.join(' · ') : 'No stack information'}
						</p>
					</div>

					<div className="sm:justify-self-start">
						<span className="font-sans text-lg tracking-wider text-text-meta mb-2 lowercase block">
							Estado
						</span>
						<p className="text-sm text-ink-subtle leading-relaxed">
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
