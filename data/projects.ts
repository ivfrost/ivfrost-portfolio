import type { Project } from '@/data/types';

export const projects: Project[] = [
	{
		number: '01',
		name: 'spring-ticketing-microservices',
		description: 'Sistema distribuido de gestión de eventos y tickets',
		stack: ['Spring Boot', 'Kafka', 'Keycloak', 'API Gateway'],
		href: 'https://github.com/ivfrost/spring-ticketing-microservices',
	},
	{
		number: '02',
		name: 'nextjs-modmasters',
		description: 'Plataforma full stack para mods de videojuegos',
		stack: ['Next.js', 'TypeScript'],
		href: 'https://github.com/ivfrost/nextjs-modmasters',
	},
	{
		number: '03',
		name: 'hydrolink-config-wizard',
		description: 'Frontend para configurar dispositivo IoT de riego',
		stack: ['React', 'TypeScript'],
		href: 'https://github.com/ivfrost/hydrolink-config-wizard',
	},
	{
		number: '04',
		name: 'joplin-adwaita-theme',
		description: 'Tema Adwaita para el editor de notas Joplin',
		stars: 26,
		stack: ['SCSS'],
		href: 'https://github.com/ivfrost/joplin-adwaita-theme',
	},
	{
		number: '05',
		name: 'visitas-virtuales-zaitec',
		description: 'Plataforma 360° para visitas a centros educativos',
		stack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'MinIO'],
		href: 'https://github.com/jaimemoya-bit/VisitasVirtualesZaitec',
	},
	{
		number: '06',
		name: 'web-100-canos',
		description: 'SPA de oleoturismo para la finca 100 Caños',
		stack: ['React', 'TypeScript'],
		href: 'https://100canos.com',
	},
];
