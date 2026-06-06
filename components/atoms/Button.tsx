'use client';

import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
	type: 'button' | 'submit' | 'reset';
	variant?: 'primary' | 'outline' | 'ghost';
	modifier?: 'full-width' | 'icon-only';
	size?: 'small' | 'medium' | 'large';
	tone?: 'light' | 'dark';
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
}

const buttonVariants = cva(
	[
		'group font-mono transition-all min-w-fit flex items-center',
		'disabled:opacity-50 justify-center whitespace-nowrap font-normal',
		'disabled:cursor-not-allowed cursor-pointer duration-200',
		'active:translate-y-px lowercase tracking-widest leading-none antialiased',
	],
	{
		variants: {
			variant: {
				primary: 'bg-ink text-frost-1 hover:bg-ink-mid',

				outline:
					'border-t border-b border-ink-subtle/40 text-ink-subtle ' +
					'hover:border-ink-subtle hover:text-ink',

				ghost: 'text-ink-subtle hover:text-ink',
			},

			tone: {
				light: '',
				dark: '',
			},
			modifier: {
				'full-width': 'w-full',
				'icon-only': 'p-2',
			},
			size: {
				small: 'px-4 pt-2.25 pb-3.75 text-sm',
				medium: 'px-[26px] pt-3.75 pb-5 text-base',
				large: 'px-10 pt-4.25 pb-5.75 text-lg',
			},
		},
		compoundVariants: [
			{
				modifier: 'icon-only',
				size: 'small',
				className: 'p-2 px-2 pt-2 pb-2',
			},
			{
				modifier: 'icon-only',
				size: 'medium',
				className: 'p-2 px-2 pt-2 pb-2',
			},
			{
				modifier: 'icon-only',
				size: 'large',
				className: 'p-2 px-2 pt-2 pb-2',
			},
		],
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
	className,
	onClick,
}: ButtonProps) {
	return (
		<button
			type={type}
			className={twMerge(
				buttonVariants({
					variant,
					modifier,
					size: modifier === 'icon-only' ? undefined : size,
					tone,
				}),
				className,
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
