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

const sectionVariants = cva([`pb-10 bg-frost-1 border-t relative`], {
	variants: {
		variant: {
			default: 'bg-frost-2 border-sage-1',
			subtle: 'bg-frost-1 border-sage-1',
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
