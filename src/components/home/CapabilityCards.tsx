import { ArrowUpRight, Clapperboard, Code2, Layers3 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useLanguage } from "../../i18n/LanguageContext";

const meta = [
  { Icon: Code2, kind: "browser" as const, slug: "digital-upplevelse" },
  { Icon: Clapperboard, kind: "film" as const, slug: "film-och-storytelling" },
  { Icon: Layers3, kind: "shape" as const, slug: "webbstrategi" },
];

export function CapabilityCards({ reduced }: { reduced: boolean }) {
  const { t } = useLanguage();
  const cards = meta.map((m, i) => ({ ...m, ...t.capability.cards[i] }));

  return (
    <section className="section-pad capability-section">
      <div className="capability-row mx-auto max-w-[1180px] px-6 lg:px-8">
        {cards.map(({ title, text, Icon, kind, chips, slug }, i) => (
          <motion.article
            key={title}
            className={`glass-card capability-card capability-${kind}`}
            initial={reduced ? false : { opacity: 0, y: 28 }}
            whileInView={reduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="capability-visual" aria-hidden="true">
              {kind === "browser" && (
                <>
                  <div className="browser-top">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="browser-layout">
                    <span />
                    <span />
                    <b />
                    <b />
                    <b />
                  </div>
                </>
              )}
              {kind === "film" && (
                <>
                  <div className="film-strip">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </>
              )}
              {kind === "shape" && (
                <>
                  <div className="orb orb-one" />
                  <div className="orb orb-two" />
                  <div className="orb orb-three" />
                  <div className="shape-grid" />
                </>
              )}
            </div>
            <div className="capability-content">
              <div className="icon-box">
                <Icon size={20} />
              </div>
              <p className="eyebrow">
                {kind === "browser"
                  ? t.capability.tagBuild
                  : kind === "film"
                    ? t.capability.tagTell
                    : t.capability.tagShape}
              </p>
              <h3>{title}</h3>
              <p className="capability-description">{text}</p>
              <div className="capability-chips">
                {chips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
