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
				className="inline-block text-text-meta-lite ml-1.25 -mt-0.5"
			/>
		),
	},
	{
		name: 'Next.js',
		icon: (
			<TbBrandNextjs
				size={18}
				strokeWidth={1.5}
				className="inline-block text-text-meta-lite ml-1.25 -mt-0.5"
			/>
		),
	},
	{
		name: 'Node.js',
		icon: (
			<FaNodeJs
				size={15.5}
				strokeWidth={1.5}
				className="inline-block text-text-meta-lite ml-1.5 -mt-0.5"
			/>
		),
	},
	{
		name: 'TypeScript',
		icon: (
			<TbBrandTypescript
				size={16.75}
				strokeWidth={1.5}
				className="inline-block text-text-meta-lite ml-1.5 -mt-0.5"
			/>
		),
	},
	{
		name: 'Java',
		icon: (
			<LiaJava
				size={21}
				className="-mt-1 inline-block text-text-meta-lite ml-1"
			/>
		),
	},
	{
		name: 'Spring',
		icon: (
			<SiSpring
				size={13.5}
				className="inline-block text-text-meta-lite ml-1.5 -mt-0.5"
			/>
		),
	},
];
