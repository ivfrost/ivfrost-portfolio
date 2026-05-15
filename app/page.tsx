import DiamondSVG from '@/components/atoms/DiamondSVG';
import CertCard from '@/components/molecules/CertCard';
import ExperienceTimeline from '@/components/organisms/ExperienceTimeline';
import Header from '@/components/organisms/Header';
import Hero from '@/components/organisms/Hero';
import Section from '@/components/organisms/Section';

export default function Home() {
	return (
		<>
			<Header
				items={[
					{ label: 'Skills', href: '#certifications' },
					{ label: 'Experience', href: '#experience' },
				]}
				logo={<div className="w-12 h-12 bg-sage-1 rounded-full" />}
			/>
			<main>
				<Hero
					titleContent={
						<div>
							Hi, I&apos;m <span className="text-ink"> Ipsum</span>
						</div>
					}
					subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					ruleContent={
						<div className="flex items-center gap-1">
							<span>Full Stack Developer</span>
							<DiamondSVG className="mx-2 w-1.25 h-1.25" />
							<span>Open to Work</span>
						</div>
					}
				/>
				<Section id="certifications" title="Certifications" variant="subtle">
					<div className="grid gap-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
