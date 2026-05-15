import DiamondSVG from '../atoms/DiamondSVG';

interface ExperienceEntryProps {
	title: string;
	company: string;
	location: string;
	dateRange: string;
	description: string;
}

export default function ExperienceEntry({
	title,
	company,
	location,
	dateRange,
	description,
}: ExperienceEntryProps) {
	const baseStyles = 'ml-5 flex flex-col gap-1';

	return (
		<div className="relative space-y-1 font-mono">
			<div className="flex items-center gap-2">
				<DiamondSVG size={10} className="text-sage-3" />
				<h3 className="text-base font-medium ml-0.5">{title}</h3>
			</div>
			<div className={baseStyles}>
				<div className="flex items-center gap-2 text-sm text-sage-5">
					<span>{company}</span>
					<DiamondSVG size={4} className="text-sage-3" />
					<span>{location}</span>
					<DiamondSVG size={4} className="text-sage-3" />
					<span>{dateRange}</span>
				</div>
				<p className="text-sm text-ink-lite leading-relaxed max-w-prose">
					{description}
				</p>
			</div>
			<span className="absolute left-1 top-4.5 h-[72%] w-px bg-sage-1" />
		</div>
	);
}
