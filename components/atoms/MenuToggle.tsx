import { motion } from 'framer-motion';

export interface MenuToggleProps {
	isOpen: boolean;
	onClick: (open: boolean) => void;
	className?: string;
}

export function MenuToggle({ isOpen, onClick, className }: MenuToggleProps) {
	return (
		<button onClick={() => onClick(!isOpen)} className={className}>
			<motion.svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				animate={isOpen ? 'open' : 'closed'}
			>
				<motion.line
					x1="3"
					y1="6"
					x2="21"
					y2="6"
					variants={{
						closed: { rotate: 0, translateY: 0 },
						open: { rotate: 45, translateY: 6 },
					}}
					transition={{ duration: 0.2 }}
				/>
				<motion.line
					x1="3"
					y1="12"
					x2="21"
					y2="12"
					initial={{ opacity: 1 }}
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 },
					}}
					transition={{ duration: 0.15 }}
				/>
				<motion.line
					x1="3"
					y1="18"
					x2="21"
					y2="18"
					variants={{
						closed: { rotate: 0, translateY: 0 },
						open: { rotate: -45, translateY: -6 },
					}}
					transition={{ duration: 0.2 }}
				/>
			</motion.svg>
		</button>
	);
}
