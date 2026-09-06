import { ArrowUpRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const links = t.nav.links;
  const projectsLink = links.find((l) => l.path === '/projekt')!;
  const aboutLink = links.find((l) => l.path === '/om')!;
  const contactLink = links.find((l) => l.path === '/kontakt')!;

  return (
    <footer className="site-footer">
      <div className="footer-accent" aria-hidden="true"><span /><span /><span /></div>
      <div className="mx-auto max-w-[1440px] px-6 py-12 lg:px-10">
        <div className="footer-hero">
          <div>
            <p className="eyebrow">{t.footer.eyebrow}</p>
            <h2 className="footer-hero-title">{t.footer.title}</h2>
          </div>
          <Link className="footer-hero-mail" to="/kontakt">{t.footer.cta} <ArrowUpRight size={18} /></Link>
        </div>

        <div className="footer-grid">
          <div>
            <p className="footer-title">{t.footer.contactLabel}</p>
            <a className="footer-link" href="mailto:molly.lidgren@outlook.com"><Mail size={16} /> molly.lidgren@outlook.com</a>
            <p className="footer-muted">{t.footer.location}</p>
          </div>
          
          <div>
            <p className="footer-title">{t.footer.navLabel}</p>
            <div className="footer-nav-stack">
              <Link className="footer-link" to="/projekt">{projectsLink.label}</Link>
              <Link className="footer-link" to="/om">{aboutLink.label}</Link>
              <Link className="footer-link" to="/kontakt">{contactLink.label}</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-[rgba(23,19,26,.10)] pt-6 text-xs text-[#7b737c] sm:flex-row sm:items-center sm:justify-between">
          <span>{t.footer.rights}</span>
          <span>{t.footer.stack}</span>
        </div>
      </div>
    </footer>
  );
}
