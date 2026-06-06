import { StackItem } from './types';
import { TbBrandNextjs, TbBrandTypescript } from 'react-icons/tb';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiSpring } from 'react-icons/si';
import { LiaJava } from 'react-icons/lia';

export const stack: StackItem[] = [
	{
		name: 'React',
		icon: (
			<FaReact
				size={16}
				strokeWidth={1.5}
				className="inline-block text-text-meta-lite ml-1.25"
			/>
		),
	},
	{
		name: 'Next.js',
		icon: (
			<TbBrandNextjs
				size={18}
				strokeWidth={1.5}
				className="inline-block text-text-meta-lite ml-1.25"
			/>
		),
	},
	{
		name: 'Node.js',
		icon: (
			<FaNodeJs
				size={16}
				strokeWidth={1.5}
				className="inline-block text-text-meta-lite ml-1.25"
			/>
		),
	},
	{
		name: 'TypeScript',
		icon: (
			<TbBrandTypescript
				size={17}
				strokeWidth={1.5}
				className="inline-block text-text-meta-lite ml-1.25"
			/>
		),
	},
	{
		name: 'Java',
		icon: (
			<LiaJava
				size={21}
				className="-mt-1 inline-block text-text-meta-lite ml-1.25"
			/>
		),
	},
	{
		name: 'Spring',
		icon: (
			<SiSpring
				size={14}
				className="inline-block text-text-meta-lite ml-1.25"
			/>
		),
	},
];
