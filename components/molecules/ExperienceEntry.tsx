import { ChevronDown } from 'lucide-react';

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
	return (
		<div className="relative space-y-1 border-b border-frost-3 pb-4">
			<div className="flex justify-between">
				<h3 className="text-base text-ink font-sans font-medium">{title}</h3>
				<span className="text-sm font-mono text-sage-3">{dateRange}</span>
			</div>
			<div className="flex justify-between items-center">
				<div className="flex items-center gap-2 text-sm text-sage-3">
					<span className="font-sans">{company}</span>
					<span>·</span>
					<span>{location}</span>
				</div>
				<ChevronDown size={16} className="text-sage-3" />
			</div>
		</div>
	);
}
