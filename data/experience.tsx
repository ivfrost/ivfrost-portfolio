import Link from 'next/link';
import type { Experience } from './types';
import { BsArrowUpRight } from 'react-icons/bs';

const experience: Experience[] = [
	{
		title: 'Desarrollador Full Stack',
		company: 'Master SAU',
		location: 'Remoto',
		modality: 'Prácticas',
		dateRange: 'Mar 2026 - Jun 2026',
		summary:
			'Durante mis prácticas participé en dos proyectos: en uno me encargué del desarrollo completo del backend, en el otro del lenguaje de diseño y arquitectura de componentes. Ejercí de integrador de ramas del equipo en ambos.',
		description: (
			<div className="flex flex-col gap-8">
				<section className="flex flex-col gap-2">
					<Link href="https://visitasvirtuales.dedyn.io/" target="_blank">
						<h4 className="font-mono text-xs hover:underline hover:underline-offset-4 uppercase tracking-wider text-text-meta flex items-center">
							Visitas Virtuales
							<BsArrowUpRight
								size={12}
								className="inline-block ml-1.5 text-text-meta"
							/>
						</h4>
					</Link>
					<p>
						Plataforma educativa con recorridos en 360° y panel de
						administración multi-rol. Asumí prácticamente toda la capa de
						servidor — API REST con Express.js, autenticación JWT con rotación
						de tokens, RBAC, trazabilidad de cambios y paginación por cursor —
						además del pipeline de despliegue en tres entornos con Docker,
						Coolify y GitHub Actions. Migré el backend a TypeScript e implementé
						hardening con Helmet, Zod y rate limiting. En frontend, extraje la
						gestión de centros a su propio contexto, implementé el refresco
						automático de tokens y unifiqué el lenguaje visual.
					</p>
					<p className="text-xs sm:ml-auto text-text-meta mt-1">
						Express.js · TypeScript · Docker · JWT · Drizzle ORM · MinIO · Zod ·
						React
					</p>
				</section>

				<section className="flex flex-col gap-2">
					<Link href="https://100canos.com/" target="_blank">
						<h4 className="font-mono text-xs hover:underline hover:underline-offset-4 uppercase tracking-wider text-text-meta flex items-center">
							Web 100 Caños
							<BsArrowUpRight
								size={12}
								className="inline-block ml-1.5 text-text-meta"
							/>
						</h4>
					</Link>
					<p>
						SPA de oleoturismo para una finca en Málaga. Me encargué del
						lenguaje de diseño completo — tema Tailwind de marca, tipografía,
						componentes base reutilizables — y garanticé la fidelidad al mockup
						en todos los dispositivos. También reforcé el módulo de envío de
						emails de un compañero, integrado en Express con Nodemailer,
						añadiendo protección XSS, rate limiting y confirmación al cliente.
					</p>
					<p className="text-xs sm:ml-auto text-text-meta mt-1">
						React · Tailwind CSS · Vite · Node.js · Nodemailer · i18n
					</p>
				</section>
			</div>
		),
	},
];

export default experience;
