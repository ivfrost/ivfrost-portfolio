interface DecorativeRuleProps {
	children: React.ReactNode;
	className?: string;
}

export default function DecorativeRule({
	children,
	className,
}: DecorativeRuleProps) {
	const baseStyles = `flex items-center gap-4 font-mono text-sm text-accent-3 tracking-widest
	uppercase`;

	return <div className={`${baseStyles} ${className}`}>{children}</div>;
}
