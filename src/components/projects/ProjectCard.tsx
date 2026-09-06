import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import type { Project } from '../../data/types';
import { useLanguage } from '../../i18n/LanguageContext';

export function ProjectCard({ project, index, reduced }: { project: Project; index: number; reduced: boolean }) {
  const { t, lang } = useLanguage();
  return <motion.article className="project-card-3d" style={{ top: `${88 + index * 18}px`, zIndex: index + 1 }} initial={reduced ? false : { opacity: 0, y: 60 }} whileInView={reduced ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .65, delay: index * .08 }}>
    <div className="project-image-wrap"><img src={project.image} alt="" /><span className="case-number">{project.number}</span><span className="case-type">{project.type[lang]}</span></div>
    <div className="project-card-body"><div><p className="eyebrow">{project.kicker[lang]}</p><h3>{project.title[lang]}</h3><p>{project.description[lang]}</p></div><div className="project-card-footer"><div className="tag-row">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div><Link className="project-link" to={`/projekt/${project.slug}`} aria-label={t.projects.openProject(project.title[lang])}>{t.projects.readCase} <ChevronRight size={18} /></Link></div></div>
  </motion.article>;
}
