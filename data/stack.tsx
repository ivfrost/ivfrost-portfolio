import { FaAws, FaReact } from 'react-icons/fa';
import { FaDocker } from 'react-icons/fa6';
import { LiaJava } from 'react-icons/lia';
import { SiExpo, SiPostgresql, SiSpring } from 'react-icons/si';
import { TbBrandTypescript } from 'react-icons/tb';
import type { StackItem } from './types';

export const stack: StackItem[] = [
  {
    name: 'Java',
    icon: (
      <LiaJava
        size={26}
        className="-mt-1 inline-block text-text-meta-lite ml-1"
      />
    ),
  },
  {
    name: 'TypeScript',
    icon: (
      <TbBrandTypescript
        size={20}
        strokeWidth={1.5}
        className="inline-block text-text-meta-lite ml-1.5 -mt-0.5"
      />
    ),
  },
  {
    name: 'Spring',
    icon: (
      <SiSpring
        size={18}
        className="inline-block text-text-meta-lite ml-1.5 -mt-0.5"
      />
    ),
  },
  {
    name: 'React',
    icon: (
      <FaReact
        size={20}
        strokeWidth={1.5}
        className="inline-block text-text-meta-lite ml-1.25 -mt-0.5"
      />
    ),
  },
  {
    name: 'Expo',
    icon: (
      <SiExpo
        size={19}
        className="inline-block text-text-meta-lite ml-1.5 -mt-0.5"
      />
    ),
  },
  {
    name: 'PostgreSQL',
    icon: (
      <SiPostgresql
        size={18}
        strokeWidth={1.5}
        className="inline-block text-text-meta-lite ml-1.25 -mt-0.5"
      />
    ),
  },
  {
    name: 'Docker',
    icon: (
      <FaDocker
        size={20}
        strokeWidth={1.5}
        className="inline-block text-text-meta-lite ml-1.25 -mt-0.5"
      />
    ),
  },
  {
    name: 'AWS',
    icon: (
      <FaAws
        size={23}
        strokeWidth={1.5}
        className="inline-block text-text-meta-lite ml-1.25 -mt-0.5"
      />
    ),
  },
];
