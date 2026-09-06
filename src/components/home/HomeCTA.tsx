import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { Rich } from '../../i18n/Rich';

export function HomeCTA() {
  const { t } = useLanguage();
  return <section className="section-pad pt-20 pb-28"><div className="mx-auto max-w-[1440px] px-6 lg:px-10"><div className="mega-cta"><h2><Rich parts={t.homeCta.title} /></h2><Link className="button-primary" to="/kontakt">{t.homeCta.cta} <ArrowUpRight size={17} /></Link></div></div></section>;
}
