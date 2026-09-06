import { PageHero } from "../components/ui/PageHero";
import { useLanguage } from "../i18n/LanguageContext";
import { Rich } from "../i18n/Rich";

export function AboutPage({ reduced: _reduced }: { reduced: boolean }) {
  const { t } = useLanguage();

  return (
    <PageHero
      eyebrow={t.about.eyebrow}
      title={<Rich parts={t.about.title} />}
      text={t.about.text}
    >
      <div className="about-layout">
        <div className="portrait-card">
          <div className="portrait-shape">
            <img
              src={`${import.meta.env.BASE_URL}images/profile/ML.png`}
              alt="Molly Lidgren"
            />
          </div>

          <p>{t.about.portraitCaption}</p>
        </div>

        <div className="about-copy">
          <p className="big-copy">{t.about.bigCopy}</p>

          {t.about.bigCopySections.map((section, index) => (
            <div key={index}>
              <h2 className="big-copy-title mt-6 uppercase">
                <strong>{section.title}</strong>
              </h2>

              <p className="big-copy-subtitle whitespace-pre-line text-justify">
                {section.subtitle}
              </p>
            </div>
          ))}

          <div className="about-pillars">
            {t.about.pillars.map((pillar) => (
              <div className="about-pillar" key={pillar.title}>
                <div className="about-pillar-line" />
                <strong>{pillar.title}</strong>
                <span>{pillar.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageHero>
  );
}
