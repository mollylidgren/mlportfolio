import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { projects } from "../../data/projects";
import { useLanguage } from "../../i18n/LanguageContext";
import { Rich } from "../../i18n/Rich";

export function Hero({ reduced }: { reduced: boolean }) {
  const { t, lang } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const artY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const artRotate = useTransform(scrollYProgress, [0, 1], [0, -3]);

  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(
      () => setActiveIndex((current) => (current + 1) % projects.length),
      4200,
    );
    return () => window.clearInterval(timer);
  }, [reduced]);

  const preloadImages = useMemo(
    () => projects.map((project) => project.image),
    [],
  );
  useEffect(() => {
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [preloadImages]);

  const positionClass = (index: number) => {
    const offset = (index - activeIndex + projects.length) % projects.length;
    return offset === 0 ? "front" : offset === 1 ? "mid" : "back";
  };

  return (
    <section ref={ref} className="hero-stage">
      <div className="hero-grid" />
      <div className="noise" />
      <motion.div
        className="hero-art"
        style={reduced ? {} : { y: artY, rotate: artRotate }}
        aria-label={t.hero.featuredAria}
      >
        <div className="hero-art-glow" />
        {projects.map((project, index) => {
          const position = positionClass(index);
          return (
            <Link
              key={project.slug}
              to={`/projekt/${project.slug}`}
              className={`hero-card-link hero-card-${position}-link`}
              aria-label={t.hero.openProject(project.title[lang])}
              onClick={() => setActiveIndex(index)}
            >
              <motion.div
                className={`hero-media-card ${position}`}
                animate={
                  reduced
                    ? undefined
                    : {
                        x:
                          position === "front"
                            ? 0
                            : position === "mid"
                              ? -34
                              : -76,
                        y:
                          position === "front"
                            ? 0
                            : position === "mid"
                              ? -12
                              : -20,
                        rotateZ:
                          position === "front"
                            ? 3
                            : position === "mid"
                              ? -5
                              : 8,
                        rotateY:
                          position === "front"
                            ? 0
                            : position === "mid"
                              ? -5
                              : 10,
                        scale:
                          position === "front"
                            ? 1
                            : position === "mid"
                              ? 0.97
                              : 0.94,
                        opacity:
                          position === "front"
                            ? 1
                            : position === "mid"
                              ? 0.9
                              : 0.72,
                      }
                }
                transition={{ duration: 2.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  className="hero-swap-image"
                  src={project.image}
                  alt=""
                  loading={index === activeIndex ? "eager" : "lazy"}
                />
              </motion.div>
            </Link>
          );
        })}
      </motion.div>

      <div className="hero-inner mx-auto grid min-h-screen max-w-[1440px] items-end gap-8 px-6 pb-20 pt-40 lg:grid-cols-[1.28fr_.72fr] lg:px-12 lg:pb-1">
        <div className="relative z-20 max-w-[760px] hero-content mt-2">
          <p className="eyebrow">
            <Sparkles size={15} /> {t.hero.eyebrow}
          </p>
          <h1 className="hero-title">
            <Rich parts={t.hero.title} />
          </h1>
          <p className="hero-copy">{t.hero.copy}</p>
          <div className="hero-actions mt-10 flex flex-wrap gap-3">
            <Link className="button-primary" to="/projekt">
              {t.hero.ctaPrimary}
            </Link>
            <Link className="button-ghost" to="/om">
              {t.hero.ctaGhost}
            </Link>
          </div>
          <div className="hero-meta relative z-10 mt-8 block max-w-none justify-self-auto">
            <div className="hero-meta-line" />
            <p>
              {t.hero.locationLine1}
              <br />
              {t.hero.locationLine2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
