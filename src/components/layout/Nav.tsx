import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";

type NavProps = {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
};

export function Nav({ menuOpen, setMenuOpen }: NavProps) {
  const { t, lang, setLang } = useLanguage();
  const links = t.nav.links;

  return (
    <header className="site-header">
      <nav className="glass-nav desktop-nav" aria-label={t.nav.mainNav}>
        <Link to="/" className="brand">
          Molly<span>Lidgren</span>
        </Link>
        <div className="desktop-links">
          {links.map(({ path, label }) => (
            <NavLink
              end={path === "/"}
              key={path}
              to={path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
        <div
          className="hidden min-[901px]:flex items-center gap-1 rounded-full border border-[rgba(23,19,26,.14)] bg-white/70 p-1 text-[11px] font-bold tracking-[.06em] ml-2"
          role="group"
          aria-label={t.nav.switchLang}
        >
          <button
            type="button"
            onClick={() => setLang("sv")}
            aria-pressed={lang === "sv"}
            className={`rounded-full px-2.5 py-1 transition-colors ${lang === "sv" ? "bg-pink text-white" : "text-[#746d75]"}`}
          >
            SV
          </button>
          <button
            type="button"
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
            className={`rounded-full px-2.5 py-1 transition-colors ${lang === "en" ? "bg-pink text-white" : "text-[#746d75]"}`}
          >
            EN
          </button>
        </div>
        <button
          className="menu-btn mobile-only"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {menuOpen && (
        <div className="glass-nav mobile-menu mobile-only">
          {links.map(({ path, label }) => (
            <NavLink
              onClick={() => setMenuOpen(false)}
              end={path === "/"}
              key={path}
              to={path}
              className={({ isActive }) =>
                `mobile-link ${isActive ? "active" : ""}`
              }
            >
              {label}
              <ArrowUpRight size={16} />
            </NavLink>
          ))}
          <div
            className="mt-2 flex items-center gap-1 rounded-full border border-[rgba(23,19,26,.14)] bg-white/70 p-1 text-[11px] font-bold tracking-[.06em] w-fit"
            role="group"
            aria-label={t.nav.switchLang}
          >
            <button
              type="button"
              onClick={() => setLang("sv")}
              aria-pressed={lang === "sv"}
              className={`rounded-full px-3 py-1.5 transition-colors ${lang === "sv" ? "bg-pink text-white" : "text-[#746d75]"}`}
            >
              SV
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`rounded-full px-3 py-1.5 transition-colors ${lang === "en" ? "bg-pink text-white" : "text-[#746d75]"}`}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
