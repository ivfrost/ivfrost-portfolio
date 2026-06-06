interface CardProps {
	title: string;
	content: React.ReactNode;
	hasLeftRule?: boolean;
	className?: string;
}

export default function Card({
	title,
	content,
	hasLeftRule = false,
	className,
}: CardProps) {
	const baseStyles = `bg-frost-2 outline outline-frost-4 p-6 flex flex-col
	gap-2 transition-colors min-h-full relative`;

	return (
		<div
			className={`${baseStyles} ${className} ${hasLeftRule ? 'border-accent-3 border-l-4' : ''}`}
		>
			<h4 className="font-sans text-lg text-ink font-medium tracking-tight">
				{title}
			</h4>
			<div className="leading-relaxed font-mono text-base">{content}</div>
		</div>
	);
}
