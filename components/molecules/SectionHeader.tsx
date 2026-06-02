interface SectionHeaderProps {
	text: string;
	className?: string;
}

export default function SectionHeader({ text, className }: SectionHeaderProps) {
	return (
		<p
			className={`font-mono w-fit text-sm mr-auto pb-1 text-text-meta tracking-wider uppercase mb-10 ${className}`}
		>
			{text}
		</p>
	);
}
