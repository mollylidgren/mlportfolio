import { projects } from '../data/projects';
import { ProjectCard } from '../components/projects/ProjectCard';
import { PageHero } from '../components/ui/PageHero';
import { useLanguage } from '../i18n/LanguageContext';
import { Rich } from '../i18n/Rich';

export function Projects({ reduced }: { reduced: boolean }) {
  const { t } = useLanguage();
  return <PageHero eyebrow={t.projects.eyebrow} title={<Rich parts={t.projects.title} />} text={t.projects.text}>
    <div className="projects-grid">{projects.map((project, i) => <ProjectCard key={project.slug} project={project} index={i} reduced={reduced} />)}</div>
  </PageHero>;
}
