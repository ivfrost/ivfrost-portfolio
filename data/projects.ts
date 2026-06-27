import type { Project } from '@/data/types';

export const projects: Project[] = [
	{
		number: '01',
		name: 'hydrolink-app',
		description: {
			es: 'App móvil para riego inteligente con vinculación de dispositivos IoT',
			en: 'Mobile app for smart irrigation with IoT device linking',
		},
		stack: ['React Native', 'Expo', 'TypeScript', 'TanStack Query'],
		href: 'https://github.com/ivfrost/hydrolink-app',
	},
	{
		number: '02',
		name: 'hydrolink-api',
		description: {
			es: 'API REST para riego inteligente con gestión de dispositivos y MQTT',
			en: 'REST API for smart irrigation with device management and MQTT',
		},
		stack: ['Spring Boot', 'MQTT', 'Docker'],
		href: 'https://github.com/ivfrost/hydrolink-api',
	},
	{
		number: '03',
		name: 'spring-ticketing-microservices',
		description: {
			es: 'Sistema distribuido de gestión de eventos y tickets',
			en: 'Distributed event and ticket management system',
		},
		stack: ['Spring Boot', 'Kafka', 'Keycloak', 'API Gateway'],
		href: 'https://github.com/ivfrost/spring-ticketing-microservices',
	},
	{
		number: '04',
		name: 'ai-agent-py',
		description: {
			es: 'Agente de IA con búsqueda web y razonamiento encadenado',
			en: 'AI agent with web search and chain-of-thought reasoning',
		},
		stack: ['Python', 'Anthropic Claude API', 'Tavily'],
		href: 'https://github.com/ivfrost/ai-agent-py',
	},
	{
		number: '05',
		name: 'visitas-virtuales',
		description: {
			es: 'Plataforma 360° para visitas virtuales a centros educativos',
			en: '360° platform for virtual tours of educational centers',
		},
		collaborative: true,
		stack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'MinIO'],
		href: 'https://github.com/jaimemoya-bit/VisitasVirtualesZaitec',
	},
];
export default projects;
