import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { Hero } from "@/components/sections/Hero";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { SkillsMarquee } from "@/components/sections/SkillsMarquee";
import { SocialFollowSection } from "@/components/sections/SocialFollowSection";
import { WorkSection } from "@/components/sections/WorkSection";

/*
 * Sections alternate white / off-white / near-black bands, as in the
 * template, so each one reads as its own block without dividing rules.
 */
export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main id="top" className="flex-1 overflow-x-clip">
        <Hero />
        <SkillsMarquee />
        <AboutSection />
        <WorkSection />
        <ExperienceSection />
        <CommunitySection />
        <LeadershipSection />
        <EducationSection />
        <SocialFollowSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
