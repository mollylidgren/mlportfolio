import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { ProjectCard } from "../projects/ProjectCard";
import { useLanguage } from "../../i18n/LanguageContext";
import { Rich } from "../../i18n/Rich";

export function FeaturedProjects({ reduced }: { reduced: boolean }) {
  const { t } = useLanguage();
  return (
    <section className="section-pad pt-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">{t.featured.eyebrow}</p>
            <h2 className="section-title">
              <Rich parts={t.featured.title} />
            </h2>
          </div>
          <Link className="text-link" to="/projekt">
            {t.featured.allProjects} <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="project-stack">
          {projects.slice(0, 3).map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              reduced={reduced}
            />
          ))}
        </div>
        <div className="featured-projects-cta">
          <Link className="button-primary" to="/projekt">
            {t.featured.viewAllProjects} <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
