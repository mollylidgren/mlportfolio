import { useLanguage } from '../../i18n/LanguageContext';

export function Marquee() {
  const { t } = useLanguage();
  const text = t.marquee.text;
  return <div className="marquee" aria-label={t.marquee.aria}><div className="marquee-track">
    <div className="marquee-group">{[0, 1].map((i) => <span key={i}>{text}</span>)}</div>
    <div className="marquee-group" aria-hidden="true">{[0, 1].map((i) => <span key={i}>{text}</span>)}</div>
  </div></div>;
}
