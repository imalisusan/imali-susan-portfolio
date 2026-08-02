import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { Hero } from "@/components/sections/Hero";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { SocialFollowSection } from "@/components/sections/SocialFollowSection";
import { SupportSection } from "@/components/sections/SupportSection";
import { WorkSection } from "@/components/sections/WorkSection";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main id="top" className="flex-1">
        <Hero />
        <div className="mx-auto w-full max-w-5xl px-6 pb-24">
          {/* minmax(0,1fr) rather than a bare auto track: an auto track sizes to
              the min-content of its widest item, so one long unbreakable string
              in any section would widen the whole page. */}
          <div className="grid grid-cols-[minmax(0,1fr)] gap-20 pt-20 sm:gap-24 sm:pt-24">
            <WorkSection />
            <ExperienceSection />
            <CommunitySection />
            <LeadershipSection />
            <EducationSection />
            <SocialFollowSection />
            <ContactSection />
            <SupportSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
