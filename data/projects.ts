import type { Project } from '@/data/types';

export const projects: Project[] = [
	{
		number: '01',
		name: 'spring-ticketing-microservices',
		description: {
			es: 'Sistema distribuido de gestión de eventos y tickets',
			en: 'Distributed event and ticket management system',
		},
		stack: ['Spring Boot', 'Kafka', 'Keycloak', 'API Gateway'],
		href: 'https://github.com/ivfrost/spring-ticketing-microservices',
	},
	{
		number: '02',
		name: 'nextjs-modmasters',
		description: {
			es: 'Plataforma full stack para mods de videojuegos',
			en: 'Full stack platform for video game mods',
		},
		stack: ['Next.js', 'TypeScript'],
		href: 'https://github.com/ivfrost/nextjs-modmasters',
	},
	{
		number: '03',
		name: 'visitas-virtuales',
		description: {
			es: 'Plataforma 360° para visitas a centros educativos',
			en: '360° platform for virtual tours of educational centers',
		},
		stack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'MinIO'],
		href: 'https://github.com/jaimemoya-bit/VisitasVirtualesZaitec',
	},
	{
		number: '04',
		name: 'web-100-canos',
		description: {
			es: 'SPA de oleoturismo para la finca 100 Caños',
			en: 'Oleotourism SPA for the 100 Caños estate',
		},
		stack: ['React', 'TypeScript'],
		href: 'https://100canos.com',
	},
];

export default projects;
