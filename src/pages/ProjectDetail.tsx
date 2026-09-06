import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { projects } from "../data/projects";
import { ParallaxImage } from "../components/projects/ParallaxImage";
import { Fact } from "../components/projects/Fact";
import { CaseStory } from "../components/projects/CaseStory";
import { ProjectGallery } from "../components/projects/ProjectGallery";
import { NotFound } from "./NotFound";
import { useLanguage } from "../i18n/LanguageContext";

export function ProjectDetail({ reduced }: { reduced: boolean }) {
  const { t, lang } = useLanguage();
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  return (
    <article className="case-page">
      <section className="case-hero">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-10">
          <div>
            <Link to="/projekt" className="back-link">
              <ArrowLeft size={16} />
              {t.projectDetail.backLink}
            </Link>

            <p className="eyebrow mt-12">
              {project.number} / {project.kicker[lang]}
            </p>

            <h1 className="page-title">{project.title[lang]}</h1>

            <p className="section-lead">{project.longDescription[lang]}</p>

            <div className="tag-row mt-8">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <ParallaxImage
            src={project.caseImage || project.image}
            reduced={reduced}
            disableParallax={true}
          />
        </div>
      </section>

      <section className="case-facts">
        <div className="mx-auto grid max-w-[1440px] gap-5 px-6 sm:grid-cols-3 lg:px-10">
          <Fact title={t.projectDetail.roleLabel} text={project.role[lang]} />

          <Fact
            title={t.projectDetail.projectTypeLabel}
            text={project.projectType[lang]}
          />

          <Fact title={t.projectDetail.focusLabel} text={project.type[lang]} />
        </div>
      </section>

      <CaseStory
        title={t.projectDetail.challengeEyebrow}
        heading={t.projectDetail.challengeHeading}
        text={project.challenge[lang]}
      />

      <CaseStory
        title={t.projectDetail.processEyebrow}
        heading={t.projectDetail.processHeading}
        text={project.process[lang]}
      />

      <CaseStory
        title={t.projectDetail.resultEyebrow}
        heading={t.projectDetail.resultHeading}
        text={project.result[lang]}
      />

      {/* Images & GIFs */}
      {project.gallery && project.gallery.length > 0 && (
        <ProjectGallery images={project.gallery} />
      )}

      {/* Video */}
      {/* Video */}
      {project.video && (
        <section className="case-media section-pad">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
            <video className="block w-full" controls playsInline>
              <source src={project.video.src} type="video/mp4" />
            </video>

            <p>{project.video.caption?.[lang]}</p>
          </div>
        </section>
      )}

      <section className="section-pad pt-8 pb-28">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 px-6 sm:flex-row sm:items-end lg:px-10">
          <div>
            <p className="eyebrow">{t.projectDetail.nextCaseEyebrow}</p>

            <h2 className="section-title">{t.projectDetail.nextCaseTitle}</h2>
          </div>

          <Link className="button-primary" to="/projekt">
            {t.projectDetail.allProjectsCta}
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </article>
  );
}
