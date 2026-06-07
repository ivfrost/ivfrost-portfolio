import type { Education } from './types';

const education: Education[] = [
	{
		title: 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma',
		institution: 'Davante MEDAC',
		location: 'Remoto',
		startDate: '2024-09-15',
		endDate: '2026-06-23',
		summary: {
			es: 'Ciclo formativo oficial con enfoque práctico en programación, bases de datos, entornos de desarrollo y desarrollo de interfaces. Incluye módulos de acceso a datos, programación de servicios y procesos, y programación multimedia para dispositivos móviles.',
			en: 'Official training program with a practical focus on programming, databases, development environments, and interface development. It includes modules on data access, service and process programming, and multimedia programming for mobile devices.',
		},
		isRemote: true,
	},
];

export default education;
