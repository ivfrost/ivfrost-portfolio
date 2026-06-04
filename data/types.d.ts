import type { ReactNode } from 'react';

export interface Project {
	number: string;
	name: string;
	description: string;
	stars?: number;
	images?: string[];
	stack: string[];
	href?: string;
}

export type Experience = {
	title: string;
	company: string;
	location: string;
	modality: string;
	dateRange: string;
	summary?: string;
	description?: ReactNode;
};

export type Cert = {
	title: string;
	issuer: string;
	date: string;
	pinned?: boolean;
	href?: string;
};
