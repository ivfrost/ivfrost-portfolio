import { cva } from 'class-variance-authority';

interface ButtonProps {
	type: 'button' | 'submit' | 'reset';
	variant?: 'primary' | 'outline' | 'ghost';
	modifier?: 'full-width';
	size?: 'small' | 'medium' | 'large';
	tone?: 'light' | 'dark';
	children: React.ReactNode;
	onClick?: () => void;
}

const buttonVariants = cva(
	[
		'group font-mono transition-all min-w-fit flex items-center',
		'disabled:opacity-50 justify-center whitespace-nowrap font-medium',
		'disabled:cursor-not-allowed cursor-pointer duration-200 rounded-sm',
		'active:translate-y-px uppercase tracking-widest leading-none antialiased',
	],
	{
		variants: {
			variant: {
				primary: 'bg-ink text-frost-1 hover:bg-ink-mid',
				outline:
					'border border-sage-3 text-ink-lite hover:border-ink-lite hover:text-ink',
				ghost: 'text-ink-lite hover:text-ink',
			},
			tone: {
				light: '',
				dark: '',
			},
			modifier: {
				'full-width': 'w-full',
			},
			size: {
				small: 'px-4 pt-2.25 pb-3.75 text-sm',
				medium: 'px-[26px] pt-3.75 pb-5 text-base',
				large: 'px-10 pt-4.25 pb-5.75 text-lg',
			},
		},
		defaultVariants: {
			variant: 'primary',
			tone: 'light',
			size: 'medium',
		},
	},
);

export default function Button({
	type,
	variant,
	modifier,
	tone,
	size,
	children,
	onClick,
}: ButtonProps) {
	return (
		<button
			type={type}
			className={buttonVariants({ variant, modifier, size, tone })}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
