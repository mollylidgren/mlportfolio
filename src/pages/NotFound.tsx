import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/ui/PageHero';
import { useLanguage } from '../i18n/LanguageContext';
import { Rich } from '../i18n/Rich';

export function NotFound() {
  const { t } = useLanguage();
  return <PageHero eyebrow={t.notFound.eyebrow} title={<Rich parts={t.notFound.title} />} text={t.notFound.text}>
    <div className="flex flex-wrap gap-3"><Link className="button-primary" to="/">{t.notFound.toStart} <ArrowUpRight size={17} /></Link><Link className="button-ghost" to="/projekt">{t.notFound.toProjects}</Link></div>
  </PageHero>;
}
