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
import CertificationsShowcase from '@/components/CertificationsShowcase';
import ContactRedesigned from '@/components/ContactRedesigned';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <IntroLoader />
      <NavigationAdvanced />
      <main className="relative">
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
        <CertificationsShowcase />
        <ContactRedesigned />
      </main>
      <Footer />
    </>
  );
}
