interface SectionHeadingProps {
	text: string;
	className?: string;
}

export default function SectionHeading({
	text,
	className,
}: SectionHeadingProps) {
	const baseStyles = `text-4xl font-semibold text-ink-mid tracking-tight`;

	return <h2 className={`${baseStyles} ${className}`}>{text}</h2>;
}
