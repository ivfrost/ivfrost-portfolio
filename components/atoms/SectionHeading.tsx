interface SectionHeadingProps {
	text: string;
	className?: string;
}

export default function SectionHeading({
	text,
	className,
}: SectionHeadingProps) {
	const baseStyles = `font-mono text-[10px] text-sage-3 tracking-wider uppercase block mb-2`;

	return <h2 className={`${baseStyles} ${className}`}>{text}</h2>;
}
