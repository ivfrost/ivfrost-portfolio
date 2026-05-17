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
		name: 'personal-portfolio',
		description: 'Mi portfolio personal construido con Next.js',
		stack: ['Next.js', 'TypeScript'],
		href: 'https://github.com/ivfrost/personal-portfolio',
	},
	{
		number: '05',
		name: 'joplin-adwaita-theme',
		description: 'Tema Adwaita para el editor de notas Joplin',
		stars: 26,
		stack: ['SCSS'],
		href: 'https://github.com/ivfrost/joplin-adwaita-theme',
	},
];
