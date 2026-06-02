import ExperienceTimeline from '@/components/organisms/ExperienceTimeline';
import Header from '@/components/organisms/Header';
import Hero from '@/components/organisms/Hero';
import Section from '@/components/organisms/Section';
import ProjectList from '@/components/organisms/ProjectList';
import { projects } from '@/data/projects';
import { experience } from '@/data/experience';
import CertCard from '@/components/molecules/CertCard';
import CertList from '@/components/organisms/CertList';

export default function Home() {
	return (
		<>
			<Header
				items={[
					{ label: 'work', href: '#work' },
					{ label: 'about', href: '#about' },
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
					certCompanies={['Frontend Masters', 'Udemy']}
					certCount={17}
				/>

				<Section id="selected-work" title="Proyectos destacados" variant="alt">
					<ProjectList items={projects} />
				</Section>

				<Section id="experience" title="Experiencia profesional">
					<ExperienceTimeline entries={experience} />
				</Section>
				<Section id="certifications" title="Certificaciones" variant="alt">
					<CertList
						items={[
							{
								title: 'Complete Intro to React, v7',
								issuer: 'Frontend Masters',
								date: 'Mar, 2024',
								href: 'https://www.frontendmasters.com/certificates/...',
							},
							{
								title:
									'React - The Complete Guide (incl Hooks, React Router, Redux)',
								issuer: 'Udemy',
								date: 'Feb, 2024',
								href: 'https://www.udemy.com/certificate/...',
							},
						]}
					/>
				</Section>
			</main>
		</>
	);
}
