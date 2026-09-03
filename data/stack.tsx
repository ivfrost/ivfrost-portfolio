import { FaAws, FaReact } from 'react-icons/fa';
import { FaDocker } from 'react-icons/fa6';
import { LiaJava } from 'react-icons/lia';
import { SiExpo, SiPostgresql, SiSpring } from 'react-icons/si';
import { TbBrandTypescript } from 'react-icons/tb';
import { StackItem } from './types';

export const stack: StackItem[] = [
	{
		name: 'Java',
		icon: (
			<LiaJava
				size={22}
				className="-mt-1 inline-block text-text-meta-lite ml-1"
			/>
		),
	},
	{
		name: 'TypeScript',
		icon: (
			<TbBrandTypescript
				size={17}
				strokeWidth={1.5}
				className="inline-block text-text-meta-lite ml-1.5 -mt-0.5"
			/>
		),
	},
	{
		name: 'Spring',
		icon: (
			<SiSpring
				size={15}
				className="inline-block text-text-meta-lite ml-1.5 -mt-0.5"
			/>
		),
	},
	{
		name: 'React',
		icon: (
			<FaReact
				size={17}
				strokeWidth={1.5}
				className="inline-block text-text-meta-lite ml-1.25 -mt-0.5"
			/>
		),
	},
	{
		name: 'Expo',
		icon: (
			<SiExpo
				size={16}
				className="inline-block text-text-meta-lite ml-1.5 -mt-0.5"
			/>
		),
	},
	{
		name: 'PostgreSQL',
		icon: (
			<SiPostgresql
				size={15}
				strokeWidth={1.5}
				className="inline-block text-text-meta-lite ml-1.25 -mt-0.5"
			/>
		),
	},
	{
		name: 'Docker',
		icon: (
			<FaDocker
				size={17}
				strokeWidth={1.5}
				className="inline-block text-text-meta-lite ml-1.25 -mt-0.5"
			/>
		),
	},
	{
		name: 'AWS',
		icon: (
			<FaAws
				size={19}
				strokeWidth={1.5}
				className="inline-block text-text-meta-lite ml-1.25 -mt-0.5"
			/>
		),
	},
];
