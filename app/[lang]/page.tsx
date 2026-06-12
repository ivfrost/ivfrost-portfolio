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
import Footer from '@/components/organisms/Footer';
import { socials } from '@/data/socials';
import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from './dictionaries';

export default async function Home({ params }: PageProps<'/[lang]'>) {
	const { lang } = await params;

	if (!hasLocale(lang)) {
		notFound();
	}
	const dict = await getDictionary(lang);
	return (
		<>
			<Header
				items={[
					{ label: dict.nav.featuredWork, href: '#featured-work' },
					{ label: dict.nav.experience, href: '#experience' },
					{ label: dict.nav.training, href: '#learning' },
					{ label: dict.nav.contact, href: '#contact' },
				]}
			/>
			<main>
				<Hero
					name="Pablo Villena"
					role={dict.hero.role}
					about={dict.hero.about}
					openTo={dict.hero.statusText}
					stack={stack}
					location={dict.hero.location}
					ctaLabel={dict.hero.ctaLabel}
					statusLabel={dict.label.status}
				/>

				<Section
					id="featured-work"
					title={dict.label.featuredWork}
					variant="alt"
				>
					<ProjectList items={projects} lang={lang} />
				</Section>

				<Section id="experience" title={dict.label.experience}>
					<ExperienceTimeline
						entries={experience}
						lang={lang}
						showMoreText={dict.button.showMore}
						showLessText={dict.button.showLess}
					/>
				</Section>
				<Section id="learning" title={dict.label.training} variant="alt">
					<EducationTimeline
						entries={education}
						heading={dict.label.studies}
						lang={lang}
					/>
					<hr className="h-12 border-transparent" />
					<CertList
						items={certs}
						heading={dict.label.certifications}
						featuredLabel={dict.label.featured}
						recentLabel={dict.label.recent}
						showMoreText={dict.button.showMore}
						showLessText={dict.button.showLess}
					/>
				</Section>
				<Section
					id="contact"
					title={dict.label.contact}
					headerClasses="mb-8 sm:mb-10!"
				>
					<ContactForm
						contactDesc={dict.contact.desc}
						submitText={dict.button.submit}
						nameLabel={dict.label.name}
						messageLabel={dict.label.message}
					/>
				</Section>
			</main>
			<Footer
				name="Pablo Villena"
				socialLinks={socials}
				downloadCvText={dict.footer.downloadCv}
				cvLink="/europass-cv-es-np.pdf"
				builtWithText={dict.footer.builtWith}
			/>
		</>
	);
}
