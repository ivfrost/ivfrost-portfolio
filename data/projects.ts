import type { Project } from '@/data/types';

export const projects: Project[] = [
	{
		number: '01',
		name: 'hydro-api',
		description: {
			es: 'Backend para sistema de riego inteligente con gestión de dispositivos y programación',
			en: 'Backend for a smart irrigation system with device management and scheduling',
		},
		stack: ['Spring Boot', 'MQTT', 'Docker'],
		href: 'https://github.com/ivfrost/hydro-api',
	},
	{
		number: '02',
		name: 'spring-ticketing-microservices',
		description: {
			es: 'Sistema distribuido de gestión de eventos y tickets',
			en: 'Distributed event and ticket management system',
		},
		stack: ['Spring Boot', 'Kafka', 'Keycloak', 'API Gateway'],
		href: 'https://github.com/ivfrost/spring-ticketing-microservices',
	},
	{
		number: '03',
		name: 'ai-agent-py',
		description: {
			es: 'Backend para riego inteligente con dispositivos vinculados a usuarios y autenticación MQTT',
			en: 'Backend for smart irrigation with user-linked devices and MQTT authentication',
		},
		stack: ['Python', 'Anthropic Claude API', 'Tavily'],
		href: 'https://github.com/ivfrost/ai-agent-py',
	},
	{
		number: '04',
		name: 'visitas-virtuales',
		description: {
			es: 'Plataforma 360° para visitas a centros educativos',
			en: '360° platform for virtual tours of educational centers',
		},
		stack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'MinIO'],
		href: 'https://github.com/jaimemoya-bit/VisitasVirtualesZaitec',
	},
	{
		number: '05',
		name: 'web-100-canos',
		description: {
			es: 'SPA de oleoturismo para la finca 100 Caños',
			en: 'Oleotourism SPA for the 100 Caños estate',
		},
		stack: ['React', 'TypeScript'],
		href: 'https://100canos.com',
	},
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const otherProjects: Project[] = [
	{
		number: '03',
		name: 'nextjs-modmasters',
		description: {
			es: 'Plataforma full stack para mods de videojuegos',
			en: 'Full stack platform for video game mods',
		},
		stack: ['Next.js', 'TypeScript'],
		href: 'https://github.com/ivfrost/nextjs-modmasters',
	},
];
export default projects;
