interface SnowflakeProps {
	size?: number;
	className?: string;
	color?: string;
}

export default function SnowflakeSVG({
	size = 120,
	className,
	color = 'currentColor',
}: SnowflakeProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 120 120"
			fill={color}
			width={size}
			height={size}
			className={className}
		>
			<g stroke="currentColor" strokeWidth="0.75" strokeLinecap="round">
				<g transform="translate(60,60)">
					<g id="arm">
						<line x1="0" y1="0" x2="0" y2="-46" />
						<line x1="0" y1="-18" x2="-10" y2="-28" />
						<line x1="0" y1="-18" x2="10" y2="-28" />
						<line x1="0" y1="-30" x2="-8" y2="-38" />
						<line x1="0" y1="-30" x2="8" y2="-38" />
						<rect
							x="-3"
							y="-50"
							width="6"
							height="6"
							transform="rotate(45 0 -47)"
						/>
					</g>
					<use href="#arm" transform="rotate(60)" />
					<use href="#arm" transform="rotate(120)" />
					<use href="#arm" transform="rotate(180)" />
					<use href="#arm" transform="rotate(240)" />
					<use href="#arm" transform="rotate(300)" />
					<polygon
						points="0,-7 6,-3.5 6,3.5 0,7 -6,3.5 -6,-3.5"
						stroke="currentColor"
						strokeWidth="0.75"
						fill="none"
					/>
				</g>
			</g>
		</svg>
	);
}
