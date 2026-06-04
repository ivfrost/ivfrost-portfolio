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
				<Section id="learning" title="Formación" variant="alt">
					<EducationTimeline entries={education} />
					<hr className="h-px mb-8 border-border" />
					<CertList items={certs} />
				</Section>
			</main>
		</>
	);
}
