import IntroLoader from '@/components/IntroLoader';
import NavigationAdvanced from '@/components/NavigationAdvanced';
import HeroRedesigned from '@/components/HeroRedesigned';
import Positioning from '@/components/Positioning';
import AboutRedesigned from '@/components/AboutRedesigned';
import SkillsRedesigned from '@/components/SkillsRedesigned';
import AnalyticsWorkspaceEnhanced from '@/components/AnalyticsWorkspaceEnhanced';
import MarketingStrategy from '@/components/MarketingStrategy';
import AutomationDiagrams from '@/components/AutomationDiagrams';
import ExperienceRedesigned from '@/components/ExperienceRedesigned';
import ProjectsRedesigned from '@/components/ProjectsRedesigned';
import CreativeGalleryEnhanced from '@/components/CreativeGalleryEnhanced';
import ContactRedesigned from '@/components/ContactRedesigned';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <IntroLoader />
      <NavigationAdvanced />
      <main className="relative z-10">
        <HeroRedesigned />
        <Positioning />
        <AboutRedesigned />
        <SkillsRedesigned />
        <AnalyticsWorkspaceEnhanced />
        <MarketingStrategy />
        <AutomationDiagrams />
        <ProjectsRedesigned />
        <CreativeGalleryEnhanced />
        <ExperienceRedesigned />
        <ContactRedesigned />
      </main>
      <Footer />
    </>
  );
}
