import ExperienceTimeline from '@/components/organisms/ExperienceTimeline';
import Header from '@/components/organisms/Header';
import Hero from '@/components/organisms/Hero';
import Section from '@/components/organisms/Section';
import ProjectList from '@/components/organisms/ProjectList';
import { projects } from '@/data/projects';

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
					role="Desarrollador Full stack"
					status="disponible"
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

				{/* <Section id="certifications" title="Certifications" variant="subtle">
					<div className="grid gap-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
						<CertCard
							title="AWS Certified Solutions Architect – Associate"
							issuer="Amazon Web Services (AWS)"
							date="Mar, 2024"
							credentialUrl="https://..."
						/>
						<CertCard
							title="AWS Certified Developer – Associate"
							issuer="Amazon Web Services (AWS)"
							hasLeftRule={true}
							date="Mar, 2024"
						/>
						<CertCard
							title="AWS Certified Cloud Practitioner"
							issuer="Amazon Web Services (AWS)"
							date="Mar, 2024"
							credentialUrl="https://..."
						/>
						<CertCard
							title="Google Cloud Certified – Professional Cloud Architect"
							issuer="Google Cloud"
							hasLeftRule={true}
							date="Apr, 2024"
						/>
						<CertCard
							title="Microsoft Certified: Azure Fundamentals"
							issuer="Microsoft"
							date="May, 2024"
						/>
						<CertCard
							title="Certified Kubernetes Application Developer (CKAD)"
							issuer="Cloud Native Computing Foundation (CNCF)"
							date="Jun, 2024"
						/>
					</div>
				</Section> */}
				<Section id="selected-work" title="Proyectos destacados">
					<ProjectList items={projects} />
				</Section>

				<Section id="experience" title="Experience">
					<ExperienceTimeline
						entries={[
							{
								title: 'Software Engineer',
								company: 'Tech Company A',
								location: 'City, Country',
								dateRange: 'Jan 2022 — Present',
								description:
									'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
							},
							{
								title: 'Frontend Developer',
								company: 'Tech Company B',
								location: 'City, Country',
								dateRange: 'Jun 2020 — Dec 2021',
								description:
									'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
							},
						]}
					/>
				</Section>
			</main>
		</>
	);
}
