interface SectionHeaderProps {
	text: string;
	className?: string;
}

export default function SectionHeader({ text, className }: SectionHeaderProps) {
	return (
		<p
			className={`font-mono w-fit text-xs mr-auto text-text-meta tracking-wider uppercase mb-8 sm:mb-10 ${className}`}
		>
			{text}
		</p>
	);
}
