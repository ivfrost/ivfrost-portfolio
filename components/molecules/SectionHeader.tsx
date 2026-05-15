import SectionDivider from '../atoms/SectionDivider';
import SectionHeading from '../atoms/SectionHeading';

interface SectionHeaderProps {
	text: string;
	className?: string;
}

export default function SectionHeader({ text, className }: SectionHeaderProps) {
	return (
		<div className="mb-4">
			<SectionDivider />
			<SectionHeading text={text} className={className} />
		</div>
	);
}
