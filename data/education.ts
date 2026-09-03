import type { Education } from './types';

const education: Education[] = [
	{
		title: 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma',
		institution: 'Davante MEDAC',
		location: 'Remoto',
		startDate: '2024-09-15',
		endDate: '2026-06-23',
		summary: {
			es: 'Ciclo de 2.000 horas homologado por el Ministerio de Educación: bases de datos, programación, desarrollo de interfaces, acceso a datos y desarrollo multimedia/móvil. Incluyó FCT y un proyecto final: plan de empresa (concepto propio) con validez de mercado, público objetivo, financiación, fiscalidad y organización del equipo bajo metodologı́a ágil.',
			en: 'Official 2,000-hour Ministry of Education-accredited programme covering databases, programming, development environments, interface development, data access, service/process programming, and mobile/multimedia development. Included a mandatory in-company work placement and a capstone business plan (self-conceived concept) covering market validity, target customer, financing, tax structure, and team organization under an Agile methodology.',
		},
		isRemote: true,
	},
];

export default education;
