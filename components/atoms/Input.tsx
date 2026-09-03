'use client';

export interface InputProps {
	name?: string;
	label: string;
	value?: string;
	required?: boolean;
	type?: 'text' | 'email' | 'password';
	as?: 'input' | 'textarea';
	minLength?: number;
	maxLength?: number;
	rows?: number;
	onFocus?: (
		e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => void;
	onBlur?: (
		e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => void;
	onChange?: (value: string) => void;
	className?: string;
}
export default function Input({
	name,
	label,
	value,
	as,
	minLength,
	maxLength,
	rows,
	onFocus,
	onBlur,
	required = false,
	type = 'text',
	onChange,
	className,
}: InputProps) {
	const base =
		'bg-transparent border-b border-border text-ink font-mono transition-colors ' +
		'focus:outline-none focus:border-ink focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed';

	return (
		<div className={`flex flex-col gap-2 ${className}`}>
			{label && (
				<label htmlFor={name} className="text-sm text-text-meta">
					{label}
				</label>
			)}

			{as === 'textarea' ? (
				<textarea
					id={name}
					name={name}
					value={value}
					rows={rows}
					onFocus={onFocus}
					onBlur={onBlur}
					minLength={minLength}
					maxLength={maxLength}
					required={required}
					onChange={(e) => onChange?.(e.target.value)}
					className={`${base} overflow-auto p-3 resize-y`}
				/>
			) : (
				<input
					id={name}
					type={type}
					name={name}
					value={value}
					onFocus={onFocus}
					required={required}
					onChange={onChange ? (e) => onChange(e.target.value) : undefined}
					className={`${base} px-4 py-2`}
				/>
			)}
		</div>
	);
}
