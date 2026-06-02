import Link from 'next/link';
import type { Experience } from './types';
import { BsArrowUpRight } from 'react-icons/bs';

export const experience: Experience[] = [
	{
		title: 'Desarrollador Full Stack',
		company: 'Zaitec',
		location: 'Remoto',
		modality: 'Prácticas',
		dateRange: 'Mar 2026 - Jun 2026',
		description: (
			<div className="flex flex-col gap-8">
				<section className="flex flex-col gap-2">
					<h4 className="font-mono text-xs uppercase tracking-wider text-text-meta">
						Rol principal
					</h4>
					<p className="text-sm text-text-muted leading-relaxed">
						Durante mis prácticas en Zaitec trabajé en dos proyectos en equipo
						con roles distintos: backend y DevOps en el primero, lenguaje de
						diseño y arquitectura de componentes en el segundo. En ambos ejercí
						de integrador de ramas del equipo.
					</p>
				</section>

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
					<p className="text-sm text-text-muted leading-relaxed">
						Plataforma de visitas educativas en 360 grados con panel de
						administración. Asumí prácticamente toda la capa de servidor — una
						API REST con Express.js, autenticación JWT con rotación de tokens,
						CRUD de puntos de interés con control de acceso por roles,
						trazabilidad de cambios y paginación por cursor — además del
						pipeline de despliegue completo en tres entornos con Docker, Coolify
						y GitHub Actions. Migré el backend íntegramente a TypeScript y
						apliqué hardening con Helmet, Zod y rate limiting diferenciado. En
						frontend extraje la gestión de centro a su propio contexto,
						implementé el refresco automático de tokens y unifiqué el lenguaje
						visual.
					</p>
					<p className="text-xs ml-auto text-text-meta mt-1">
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
								className="inline-block ml-1.5 text-muted-meta"
							/>
						</h4>
					</Link>
					<p className="text-sm text-text-muted leading-relaxed">
						SPA de oleoturismo para una finca en Málaga. Me encargué del
						lenguaje de diseño completo — tema Tailwind de marca, tipografía,
						componentes base reutilizables — y de que el resultado final se
						ajustara al mockup en cualquier dispositivo. También mejoré la
						seguridad de un servidor de email creado por un compañero añadiendo
						protección XSS, rate limiting y envío de confirmación al cliente.
					</p>
					<p className="text-xs ml-auto text-text-meta mt-1">
						React · Tailwind CSS · Vite · Node.js · Nodemailer · i18n
					</p>
				</section>
			</div>
		),
	},
];
