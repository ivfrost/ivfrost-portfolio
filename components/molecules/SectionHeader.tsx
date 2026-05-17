import SectionHeading from '../atoms/SectionHeading';

interface SectionHeaderProps {
	text: string;
	className?: string;
}

export default function SectionHeader({ text, className }: SectionHeaderProps) {
	return (
		<div className="mt-12 mb-8">
			<SectionHeading text={text} className={className} />
		</div>
	);
}
