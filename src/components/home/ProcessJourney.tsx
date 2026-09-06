import { motion } from "motion/react";
import { useLanguage } from "../../i18n/LanguageContext";
import { Rich } from "../../i18n/Rich";

export function ProcessJourney({ reduced }: { reduced: boolean }) {
  const { t } = useLanguage();
  return (
    <section className="process-section">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="process-grid">
          <div className="sticky-side">
            <p className="eyebrow">{t.process.eyebrow}</p>
            <h2 className="section-title">
              <Rich parts={t.process.title} />
            </h2>
            <p className="section-lead small">{t.process.lead}</p>
          </div>
          <div className="process-story">
            {t.process.steps.map(({ num, title, text }, i) => (
              <motion.div
                className="process-step"
                key={num}
                initial={reduced ? false : { opacity: 0, x: 40 }}
                whileInView={reduced ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
              >
                <span>{num}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
