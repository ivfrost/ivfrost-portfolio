interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}

export default function Container({ children, className }: ContainerProps) {
	const baseStyles = `mx-auto w-full max-w-5xl px-4 sm:px-8 lg:px-16`;

	return <div className={`${baseStyles} ${className}`}>{children}</div>;
}
