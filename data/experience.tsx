import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';
import type { Experience } from './types';

const experience: Experience[] = [
	{
		title: {
			es: 'Desarrollador Full Stack',
			en: 'Full Stack Developer',
		},
		company: 'Master Distancia SAU',
		location: 'Remoto',
		modality: 'Prácticas',
		isRemote: true,
		startDate: '2026-03',
		endDate: '2026-06',
		summary: {
			es: 'Durante mis prácticas participé en dos proyectos: en uno me encargué del desarrollo completo del backend, en el otro del lenguaje de diseño y arquitectura de componentes. Ejercí de integrador de ramas del equipo en ambos.',
			en: 'During my internship I participated in two projects: in one I was in charge of the complete development of the backend, in the other of the design language and component architecture. I acted as a branch integrator for the team in both.',
		},
		description: {
			es: (
				<div className="flex flex-col gap-8 mt-8">
					<section className="flex flex-col gap-2">
						<Link href="https://visitasvirtuales.dedyn.io/" target="_blank">
							<h5 className="lowercase mb-0 hover:underline hover:underline-offset-4 flex items-center">
								Visitas-Virtuales
								<BsArrowUpRight
									size={12}
									className="inline-block mt-0.5 ml-1.5 text-text-meta"
								/>
							</h5>
						</Link>
						<p>
							Plataforma educativa con recorridos en 360° y panel de
							administración multi-rol. Asumí prácticamente toda la capa de
							servidor — API REST con Express.js, autenticación JWT con rotación
							de tokens, RBAC, trazabilidad de cambios y paginación por cursor —
							además del pipeline de despliegue en tres entornos con Docker,
							Coolify y GitHub Actions. Migré el backend a TypeScript e
							implementé hardening con Helmet, Zod y rate limiting. En frontend,
							extraje la gestión de centros a su propio contexto, implementé el
							refresco automático de tokens y unifiqué el lenguaje visual.
						</p>
					</section>

					<section className="flex flex-col gap-2">
						<Link href="https://100canos.com/" target="_blank">
							<h5 className="lowercase mb-0 hover:underline hover:underline-offset-4 flex items-center">
								Web-100-caños
								<BsArrowUpRight
									size={12}
									className="inline-block mt-0.5 ml-1.5 text-text-meta"
								/>
							</h5>
						</Link>
						<p>
							SPA de oleoturismo para una finca en Málaga. Me encargué del
							lenguaje de diseño completo — tema Tailwind de marca, tipografía,
							componentes base reutilizables — y garanticé la fidelidad al
							mockup en todos los dispositivos. También reforcé el módulo de
							envío de emails de un compañero, integrado en Express con
							Nodemailer, añadiendo protección XSS, rate limiting y confirmación
							al cliente.
						</p>
					</section>
				</div>
			),
			en: (
				<div className="flex flex-col gap-8 mt-8">
					<section className="flex flex-col gap-2">
						<Link href="https://visitasvirtuales.dedyn.io/" target="_blank">
							<h5 className="lowercase mb-0 hover:underline hover:underline-offset-4 flex items-center">
								Visitas-Virtuales
								<BsArrowUpRight
									size={12}
									className="inline-block mt-0.5 ml-1.5 text-text-meta"
								/>
							</h5>
						</Link>
						<p>
							Educational platform with 360° tours and multi-role administration
							panel. I took care of practically the entire server layer — REST
							API with Express.js, JWT authentication with token rotation, RBAC,
							change traceability and cursor pagination — as well as the
							deployment pipeline in three environments with Docker, Coolify and
							GitHub Actions. I migrated the backend to TypeScript and
							implemented hardening with Helmet, Zod and rate limiting. In the
							frontend, I extracted the management of centers to its own
							context, implemented automatic token refresh and unified the
							visual language.
						</p>
					</section>

					<section className="flex flex-col gap-2">
						<Link href="https://100canos.com/" target="_blank">
							<h5 className="lowercase mb-0 hover:underline hover:underline-offset-4 flex items-center">
								Web-100-caños
								<BsArrowUpRight
									size={12}
									className="inline-block mt-0.5 ml-1.5 text-text-meta"
								/>
							</h5>
						</Link>
						<p>
							Oleotourism SPA for a farm in Málaga. I was in charge of the
							complete design language — Tailwind brand theme, typography,
							reusable base components — and ensured fidelity to the mockup on
							all devices. I also reinforced a colleague&apos;s email sending
							module, integrated into Express with Nodemailer, adding XSS
							protection, rate limiting and confirmation to the client.
						</p>
					</section>
				</div>
			),
		},
	},
];

export default experience;
