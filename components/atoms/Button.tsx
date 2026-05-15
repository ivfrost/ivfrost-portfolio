import { cva } from 'class-variance-authority';

interface ButtonProps {
	type: 'button' | 'submit' | 'reset';
	variant?: 'primary' | 'outline' | 'ghost';
	modifier?: 'full-width';
	size?: 'small' | 'medium' | 'large';
	children: React.ReactNode;
	onClick?: () => void;
}

const buttonVariants = cva(
	[
		'group font-mono transition-all min-w-fit flex items-center',
		'disabled:opacity-50 justify-center whitespace-nowrap font-medium',
		'disabled:cursor-not-allowed cursor-pointer duration-200',
		'active:translate-y-px uppercase tracking-widest leading-none antialiased',
	],
	{
		variants: {
			variant: {
				primary: 'bg-ink text-white hover:bg-sage-5 shadow-sm',
				outline:
					'outline outline-1 outline-frost-4 text-ink-lite hover:outline-ink-lite hover:text-ink hover:bg-sage-4/10',
				ghost: 'text-sage-4 hover:bg-sage-4/10',
			},
			modifier: {
				'full-width': 'w-full',
			},
			size: {
				small: 'px-4 pt-2 pb-3.5 text-sm',
				medium: 'px-[26px] pt-3 pb-4.5 text-base',
				large: 'px-10 pt-4 pb-5.5 text-lg',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'medium',
		},
	},
);

export default function Button({
	type,
	variant,
	modifier,
	size,
	children,
	onClick,
}: ButtonProps) {
	return (
		<button
			type={type}
			className={buttonVariants({ variant, modifier, size })}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
