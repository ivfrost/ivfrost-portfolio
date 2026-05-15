interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}

export default function Container({ children, className }: ContainerProps) {
	const baseStyles = `mx-auto max-w-7xl items-center px-8`;

	return <div className={`${baseStyles} ${className}`}>{children}</div>;
}
