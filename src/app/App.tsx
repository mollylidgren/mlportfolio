import { BrowserRouter } from 'react-router-dom';
import { SiteShell } from '../components/layout/SiteShell';

export function App() {
  return (
    <BrowserRouter>
      <SiteShell />
    </BrowserRouter>
  );
}
