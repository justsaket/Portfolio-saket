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
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

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
        <Projects />
        <ExperienceRedesigned />
        <Contact />
      </main>
    </>
  );
}
