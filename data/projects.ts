import type { Project } from '@/data/types';

export const projects: Project[] = [
	{
		number: '01',
		name: 'hydrolink-app',
		description: {
			es: 'App móvil para control de riego IoT con registro de usuarios, vinculación de dispositivos, gestión de áreas y horarios, y control manual con cuenta atrás.',
			en: 'Mobile app for IoT irrigation control with user sign-up, device linking, area and schedule management, and manual control with countdown feedback.',
		},
		stack: ['React Native', 'Expo', 'TypeScript', 'TanStack Query'],
		href: 'https://github.com/ivfrost/hydrolink-app',
	},
	{
		number: '02',
		name: 'hydrolink-api',
		description: {
			es: 'API REST para plataforma IoT de riego con autenticación de usuarios, vinculación de dispositivos por secreto, gestión de áreas y programaciones, y comunicación MQTT con ACLs firmados RSA.',
			en: 'REST API for IoT irrigation platform with user authentication, device linking via per-device secret, area and schedule management, and MQTT communication with RSA-signed ACLs.',
		},
		stack: ['Spring Boot', 'MQTT', 'Docker'],
		href: 'https://github.com/ivfrost/hydrolink-api',
	},
	{
		number: '03',
		name: 'ai-agent-py',
		description: {
			es: 'Agente de IA con búsqueda web, lectura y edición de archivos, y razonamiento encadenado.',
			en: 'AI agent with web search, file reading and editing, and chain-of-thought reasoning.',
		},
		stack: ['Python', 'Anthropic Claude API', 'Tavily'],
		href: 'https://github.com/ivfrost/ai-agent-py',
	},
	{
		number: '04',
		name: 'visitas-virtuales',
		description: {
			es: 'Plataforma Full‑Stack de visitas virtuales 360°. Autenticación JWT con refresh tokens, control de acceso basado en roles, auditoría completa y subida de archivos a MinIO.',
			en: 'Full‑Stack 360° virtual tour platform. JWT authentication with refresh tokens, role‑based access control, full audit trails, and file uploads to MinIO.',
		},
		collaborative: true,
		stack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'MinIO'],
		href: 'https://github.com/jaimemoya-bit/VisitasVirtualesZaitec',
	},
];

const otherProjects: Project[] = [
	{
		number: 'XX',
		name: 'spring-ticketing-microservices',
		description: {
			es: 'Sistema distribuido de gestión de eventos y tickets',
			en: 'Distributed event and ticket management system',
		},
		stack: ['Spring Boot', 'Kafka', 'Keycloak', 'API Gateway'],
		href: 'https://github.com/ivfrost/spring-ticketing-microservices',
	},
];
export default projects;
