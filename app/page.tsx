import ExperienceTimeline from '@/components/organisms/ExperienceTimeline';
import Header from '@/components/organisms/Header';
import Hero from '@/components/organisms/Hero';
import Section from '@/components/organisms/Section';
import ProjectList from '@/components/organisms/ProjectList';
import { projects } from '@/data/projects';
import experience from '@/data/experience';
import certs from '@/data/certs';
import CertList from '@/components/organisms/CertList';

export default function Home() {
	return (
		<>
			<Header
				items={[
					{ label: 'work', href: '#selected-work' },
					{ label: 'experience', href: '#experience' },
					{ label: 'certs', href: '#certifications' },
					{ label: 'contact', href: '#contact' },
				]}
			/>
			<main>
				<Hero
					name="Pablo Villena"
					role="Desarrollador Full Stack"
					openTo="nuevas oportunidades"
					stack={[
						'React',
						'Next.js',
						'Node.js',
						'TypeScript',
						'Java',
						'Spring',
					]}
					location="Remoto o Málaga"
				/>

				<Section id="selected-work" title="Proyectos destacados" variant="alt">
					<ProjectList items={projects} />
				</Section>

				<Section id="experience" title="Experiencia profesional">
					<ExperienceTimeline entries={experience} />
				</Section>
				<Section id="certifications" title="Certificaciones" variant="alt">
					<CertList items={certs} />
				</Section>
			</main>
		</>
	);
}
