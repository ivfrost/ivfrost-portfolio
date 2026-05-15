import { Snowflake } from 'lucide-react';

export default function SectionDivider() {
	return (
		<div className="flex gap-4 items-center">
			<hr className="border-t border-sage-2 mt-10 mb-12 flex-2" />
			<Snowflake className="w-5 h-5 text-sage-2 -mt-2" />
			<hr className="border-t border-sage-2 mt-10 mb-12 flex-5" />
		</div>
	);
}
