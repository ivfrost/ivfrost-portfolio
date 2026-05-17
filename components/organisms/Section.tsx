import { cva } from 'class-variance-authority';
import SectionHeader from '../molecules/SectionHeader';
import Container from '../layout/Container';

interface SectionProps {
	id?: string;
	title: string;
	variant?: 'default' | 'subtle';
	children: React.ReactNode;
	className?: string;
}

const sectionVariants = cva([`py-10 bg-background border-b relative`], {
	variants: {
		variant: {
			default: 'bg-background border-border',
			subtle: 'bg-background border-border-subtle',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});

export default function Section({
	id,
	title,
	variant,
	children,
	className,
}: SectionProps) {
	return (
		<section id={id} className={`${sectionVariants({ variant })} ${className}`}>
			<Container>
				<SectionHeader text={title} />
				{children}
			</Container>
		</section>
	);
}
