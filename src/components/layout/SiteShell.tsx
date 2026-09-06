import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useReducedMotion } from 'motion/react';
import { CursorGlow } from '../effects/CursorGlow';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { Home } from '../../pages/Home';
import { Projects } from '../../pages/Projects';
import { ProjectDetail } from '../../pages/ProjectDetail';
import { AboutPage } from '../../pages/AboutPage';
import { ExperiencePage } from '../../pages/ExperiencePage';
import { ContactPage } from '../../pages/ContactPage';
import { NotFound } from '../../pages/NotFound';

export function SiteShell() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduced = !!useReducedMotion();

  return (
    <div className="site-shell">
      <CursorGlow reduced={reduced} />
      <ScrollToTop />
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home reduced={reduced} />} />
          <Route path="/projekt" element={<Projects reduced={reduced} />} />
          <Route path="/projekt/:slug" element={<ProjectDetail reduced={reduced} />} />
          <Route path="/om" element={<AboutPage reduced={reduced} />} />
          <Route path="/erfarenhet" element={<ExperiencePage reduced={reduced} />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
