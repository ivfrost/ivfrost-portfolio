import { cva } from 'class-variance-authority';
import SectionHeader from '../molecules/SectionHeader';
import Container from '../layout/Container';

interface SectionProps {
	id?: string;
	title: string;
	variant?: 'default' | 'alt';
	children: React.ReactNode;
	className?: string;
}

const sectionVariants = cva(
	[`py-10 bg-background relative border-b border-border`],
	{
		variants: {
			variant: {
				default: 'bg-background',
				alt: 'bg-background-alt',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
);

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
