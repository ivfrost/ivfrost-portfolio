interface SectionHeaderProps {
	text: string;
	className?: string;
}

export default function SectionHeader({ text, className }: SectionHeaderProps) {
	return (
		<p
			className={`font-sans font-normal lowercase w-fit text-lg mr-auto text-text-meta tracking-wider mb-8 sm:mb-10 ${className}`}
		>
			{text}
		</p>
	);
}
