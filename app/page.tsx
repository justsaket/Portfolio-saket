import IntroLoader from '@/components/IntroLoader';
import NavigationAdvanced from '@/components/NavigationAdvanced';
import HeroRedesigned from '@/components/HeroRedesigned';
import Positioning from '@/components/Positioning';
import AboutRedesigned from '@/components/AboutRedesigned';
import SkillsRedesigned from '@/components/SkillsRedesigned';
import MarketingSuite from '@/components/MarketingSuite';
import AnalyticsSuite from '@/components/AnalyticsSuite';
import AutomationSuite from '@/components/AutomationSuite';
import ExperienceRedesigned from '@/components/ExperienceRedesigned';
import ProjectsRedesigned from '@/components/ProjectsRedesigned';
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
        <MarketingSuite />
        <AnalyticsSuite />
        <AutomationSuite />
        <ProjectsRedesigned />
        <ExperienceRedesigned />
        <CertificationsShowcase />
        <ContactRedesigned />
      </main>
      <Footer />
    </>
  );
}
