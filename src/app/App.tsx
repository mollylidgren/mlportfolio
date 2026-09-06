import { BrowserRouter } from 'react-router-dom';
import { SiteShell } from '../components/layout/SiteShell';

export function App() {
  console.log('Portfolio URL:', window.location.href);
  console.log('Portfolio pathname:', window.location.pathname);

  return (
    <BrowserRouter basename="/mlportfolio">
      <SiteShell />
    </BrowserRouter>
  );
}