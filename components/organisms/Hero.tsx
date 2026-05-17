import Container from '../layout/Container';

interface HeroProps {
	name?: string;
	role?: string;
	status?: string;
	stack?: string[];
	className?: string;
}

export default function Hero({
	name,
	role,
	status,
	stack = [],
	className,
}: HeroProps) {
	return (
		<section
			className={`py-14 bg-background border-b border-border ${className}`}
		>
			<Container>
				{/* Name + status */}
				<div className="mb-8">
					<h1 className="text-6xl font-normal tracking-tight text-ink leading-none mb-2">
						{name}
					</h1>
					<p className="font-mono text-sm text-text-meta tracking-wider">
						{role} · {status}
					</p>
				</div>

				{/* Three column strip */}
				<div className="grid grid-cols-3 border-t border-border pt-6">
					<div className="pr-8 border-r border-border">
						<span className="font-mono text-xs text-text-meta tracking-wider uppercase block mb-2">
							Stack
						</span>
						<p className="text-sm text-text-muted leading-relaxed">
							{stack.length > 0 ? stack.join(' · ') : 'No stack information'}
						</p>
					</div>

					<div className="px-8 border-r border-border">
						<span className="font-mono text-xs text-text-meta tracking-wider uppercase block mb-2">
							Currently
						</span>
						<p className="text-sm text-text-muted leading-relaxed">
							Open to full-time roles
							<br />
							Remote or Málaga-based
						</p>
					</div>

					<div className="pl-8">
						<span className="font-mono text-xs text-text-meta tracking-wider uppercase block mb-2">
							Certifications
						</span>
						<p className="text-sm text-text-muted leading-relaxed">
							Frontend Masters · Udemy
							<br />
							17 completed
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
}
