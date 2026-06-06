import ExperienceTimeline from '@/components/organisms/ExperienceTimeline';
import Header from '@/components/organisms/Header';
import Hero from '@/components/organisms/Hero';
import Section from '@/components/organisms/Section';
import ProjectList from '@/components/organisms/ProjectList';
import { projects } from '@/data/projects';
import experience from '@/data/experience';
import certs from '@/data/certs';
import CertList from '@/components/organisms/CertList';
import EducationTimeline from '@/components/organisms/EducationTimeline';
import education from '@/data/education';
import ContactForm from '@/components/organisms/ContactForm';
import { stack } from '@/data/stack';

export default function Home() {
	return (
		<>
			<Header
				items={[
					{ label: 'proyectos', href: '#selected-work' },
					{ label: 'experiencia', href: '#experience' },
					{ label: 'formación', href: '#learning' },
					{ label: 'contacto', href: '#contact' },
				]}
			/>
			<main>
				<Hero
					name="Pablo Villena"
					role="Desarrollador Full Stack"
					about="Desarrollo software con foco en backend y arquitectura. Soy autodidacta por naturaleza — si algo me interesa, lo aprendo. Mantengo un homelab con Proxmox y uso Linux como sistema principal."
					openTo="nuevas oportunidades"
					stack={stack}
					location="Remoto o Málaga"
				/>

				<Section id="selected-work" title="Proyectos destacados" variant="alt">
					<ProjectList items={projects} />
				</Section>

				<Section id="experience" title="Experiencia profesional">
					<ExperienceTimeline entries={experience} />
				</Section>
				<Section id="learning" title="Formación" variant="alt">
					<EducationTimeline entries={education} />
					<hr className="h-12 border-transparent" />
					<CertList items={certs} />
				</Section>
				<Section id="contact" title="Contacto" headerClasses="mb-8 sm:mb-10!">
					<ContactForm />
				</Section>
			</main>
		</>
	);
}
