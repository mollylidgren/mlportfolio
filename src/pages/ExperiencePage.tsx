import { motion } from "motion/react";
import { education, experiences } from "../data/siteData";
import { PageHero } from "../components/ui/PageHero";
import { useLanguage } from "../i18n/LanguageContext";
import { Rich } from "../i18n/Rich";

function ExperienceText({ text }: { text: string }) {
  const match = text.match(/^(\s*)([^\n]+)(\s*\n)([\s\S]*)$/);

  if (!match) {
    return <p className="whitespace-pre-line text-justify">{text} </p>;
  }

  const [, leadingSpace, firstLine, lineBreak, rest] = match;

  return (
    <p className="whitespace-pre-line text-justify">
      {leadingSpace} <strong>{firstLine.trim()}</strong>
      {lineBreak}
      {rest}{" "}
    </p>
  );
}

export function ExperiencePage({ reduced }: { reduced: boolean }) {
  const { t, lang } = useLanguage();

  return (
    <PageHero
      eyebrow={t.experience.eyebrow}
      title={<Rich parts={t.experience.title} />}
      text={t.experience.text}
    >
      {" "}
      <div className="experience-list">
        {experiences.map(([num, title, text]) => (
          <motion.article
            key={num}
            className="experience-row"
            initial={reduced ? false : { opacity: 0, y: 30 }}
            whileInView={reduced ? {} : { opacity: 1, y: 0 }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
          >
            {" "}
            <span>{num}</span>
            <h2>{title[lang]}</h2>
            <ExperienceText text={text[lang]} />
          </motion.article>
        ))}
      </div>
      <div className="education-block">
        <p className="eyebrow">{t.experience.educationLabel}</p>

        {education.map(([year, title, text]) => (
          <div className="education-row" key={title[lang]}>
            <span>{year}</span>

            <div>
              <h3>{title[lang]}</h3>

              <p className="whitespace-pre-line">{text[lang]}</p>
            </div>
          </div>
        ))}
      </div>
    </PageHero>
  );
}
