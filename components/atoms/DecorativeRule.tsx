interface DecorativeRuleProps {
	children: React.ReactNode;
	className?: string;
}

export default function DecorativeRule({
	children,
	className,
}: DecorativeRuleProps) {
	const baseStyles = `flex items-center gap-4 font-mono text-sm text-sage-3 tracking-widest
	uppercase before:content-[''] before:block before:w-10 before:border-t before:border-current`;

	return <div className={`${baseStyles} ${className}`}>{children}</div>;
}
