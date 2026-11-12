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
      es: 'Durante mis prácticas trabajé en dos proyectos de cliente: una plataforma de visitas virtuales 360° para centros educativos y una SPA de oleoturismo. Desarrollé todo el backend de la plataforma, contribuí al historial de auditoría del frontend y definí el sistema visual de la SPA. También me encargué de integrar las ramas de un equipo de más de 10 desarrolladores, revisando y fusionando más de 120 pull requests.',
      en: 'During my internship I worked on two client projects: a 360° virtual-tour platform for schools and an oleotourism SPA. I built the platform’s entire backend, contributed to its frontend audit history, and defined the SPA’s design system. I also handled branch integration for a team of 10+ developers, reviewing and merging 120+ pull requests.',
    },
    description: {
      es: (
        <div className="flex flex-col gap-8 mt-8">
          <section className="flex flex-col gap-2">
            <h5 className="lowercase mb-0">Visitas-Virtuales</h5>
            <ul className="flex flex-col gap-2 list-disc pl-5 font-sans text-sm text-ink-subtle leading-relaxed">
              <li>
                Desarrollé todo el backend con Express.js y TypeScript para
                una plataforma educativa de visitas virtuales 360°.
              </li>
              <li>
                Implementé autenticación JWT con tokens de acceso de corta
                duración y cookies httpOnly de renovación de 7 días, control de
                acceso por roles, paginación por cursor y registro de auditoría
                de cambios.
              </li>
              <li>
                Protegí la API con validación Zod, Helmet y límite de peticiones
                por IP. Añadí subidas a MinIO (compatible con S3) con limpieza
                automática, documenté los endpoints con OpenAPI y configuré
                despliegues de desarrollo, staging y producción con Docker
                multi-stage, PM2, GitHub Actions y Coolify.
              </li>
              <li>
                En el frontend me encargué de la expiración de tokens y
                desarrollé de principio a fin la página de historial de
                auditoría.
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-2">
            <h5 className="lowercase mb-0">Web-100-caños</h5>
            <ul className="flex flex-col gap-2 list-disc pl-5 font-sans text-sm text-ink-subtle leading-relaxed">
              <li>
                Definí el sistema visual completo de una SPA de oleoturismo:
                tema de Tailwind, tipografía y componentes reutilizables,
                siguiendo el mockup del cliente.
              </li>
              <li>
                Mejoré el módulo de correo de un compañero (Express y
                Nodemailer) con protección XSS, límite de peticiones y
                confirmaciones automáticas de reserva para los usuarios.
              </li>
            </ul>
          </section>
        </div>
      ),
      en: (
        <div className="flex flex-col gap-8 mt-8">
          <section className="flex flex-col gap-2">
            <h5 className="lowercase mb-0">Visitas-Virtuales</h5>
            <ul className="flex flex-col gap-2 list-disc pl-5 font-sans text-sm text-ink-subtle leading-relaxed">
              <li>
                Built the entire backend with Express.js and TypeScript for an
                educational 360° virtual-tour platform.
              </li>
              <li>
                Implemented JWT authentication with short-lived access tokens
                and 7-day httpOnly refresh cookies, role-based access control,
                cursor pagination, and a change audit trail.
              </li>
              <li>
                Secured the API with Zod validation, Helmet, and per-IP rate
                limiting. Added MinIO (S3-compatible) uploads with automatic
                cleanup, documented the endpoints with OpenAPI, and set up dev,
                staging, and production deployments with multi-stage Docker
                builds, PM2, GitHub Actions, and Coolify.
              </li>
              <li>
                On the frontend, handled token expiry and built the audit
                history page end to end.
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-2">
            <h5 className="lowercase mb-0">Web-100-caños</h5>
            <ul className="flex flex-col gap-2 list-disc pl-5 font-sans text-sm text-ink-subtle leading-relaxed">
              <li>
                Defined the complete design system for an oleotourism SPA:
                Tailwind theme, typography, and reusable components, following
                the client’s mockup.
              </li>
              <li>
                Improved a colleague’s email module (Express and Nodemailer)
                with XSS protection, rate limiting, and automated booking
                confirmations for users.
              </li>
            </ul>
          </section>
        </div>
      ),
    },
  },
];

export default experience;
