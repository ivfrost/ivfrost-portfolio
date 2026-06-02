export interface BadgeProps {
	text: string;
	size?: 'small';
	className?: string;
}

export default function Badge({ text, size, className }: BadgeProps) {
	return (
		<span
			className={`inline-block text-xs font-mono tracking-wide rounded bg-badge text-text-meta ${size === 'small' ? 'px-2.25 py-0.5' : 'px-2 py-1'} ${className}`}
		>
			{text}
		</span>
	);
}
