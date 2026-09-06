import { Hero } from '../components/home/Hero';
import { Marquee } from '../components/home/Marquee';
import { SectionIntro } from '../components/home/SectionIntro';
import { CapabilityCards } from '../components/home/CapabilityCards';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { ProcessJourney } from '../components/home/ProcessJourney';
import { HomeCTA } from '../components/home/HomeCTA';

export function Home({ reduced }: { reduced: boolean }) {
  return <>
    <Hero reduced={reduced} /><Marquee />
    <SectionIntro />
    <CapabilityCards reduced={reduced} />
    <FeaturedProjects reduced={reduced} />
    <ProcessJourney reduced={reduced} />
    <HomeCTA />
  </>;
}
