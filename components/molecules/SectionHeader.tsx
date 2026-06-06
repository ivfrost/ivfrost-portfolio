interface SectionHeaderProps {
	text: string;
	className?: string;
}

export default function SectionHeader({ text, className }: SectionHeaderProps) {
	return (
		<h2
			className={`font-sans text-text-meta-lite items-center gap-4 lowercase font-light mb-16 ${className}`}
		>
			<span className="shrink-0">{text}</span>
		</h2>
	);
}
