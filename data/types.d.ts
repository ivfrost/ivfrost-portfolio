import type { ReactNode } from 'react';

export interface Project {
	number: string;
	name: string;
	description: {
		en: string;
		es: string;
	};
	stars?: number;
	stack: string[];
	href?: string;
}

export type Experience = {
	title: {
		en: string;
		es: string;
	};
	company: string;
	location: string;
	isRemote?: boolean;
	modality?: string;
	startDate: string;
	endDate: string;
	summary?: {
		en: string;
		es: string;
	};
	description?: {
		en: ReactNode;
		es: ReactNode;
	};
};

export type Cert = {
	title: string;
	issuer: string;
	date: string;
	pinned?: boolean;
	href?: string;
};

export type Education = {
	title: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	summary?: {
		en: string;
		es: string;
	};
	isRemote?: boolean;
};

export type SocialLinkData = {
	href: string;
	label: string;
	isMobile?: boolean;
	icon: ComponentType<{ size?: number; strokeWidth?: number }>;
};

export type StackItem =
	| {
			name: string;
			icon?: ReactNode;
	  }
	| string;
