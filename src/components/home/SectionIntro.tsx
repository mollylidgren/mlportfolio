import { useLanguage } from '../../i18n/LanguageContext';
import { Rich } from '../../i18n/Rich';

export function SectionIntro() {
  const { t } = useLanguage();
  return <section id="intro" className="section-pad pb-16"><div className="mx-auto max-w-[1440px] px-6 lg:px-10"><p className="eyebrow">{t.sectionIntro.eyebrow}</p><div className="sticky-title static max-w-none">{t.sectionIntro.stickyBefore}<span>{t.sectionIntro.stickyAfter}</span></div><h2 className="section-title"><Rich parts={t.sectionIntro.title} /></h2><p className="section-lead">{t.sectionIntro.text}</p></div></section>;
}
