interface DiamondProps {
	size?: string | number;
	className?: string;
}

export default function DiamondSVG({ size = '1em', className }: DiamondProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 100 100"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path d="M50 0L100 50L50 100L0 50Z" fill="currentColor" />
		</svg>
	);
}
