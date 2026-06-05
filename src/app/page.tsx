import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { Hero } from "@/components/sections/Hero";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { RevelationSection } from "@/components/sections/RevelationSection";
import { WebsitesSection } from "@/components/sections/WebsitesSection";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-[radial-gradient(1100px_700px_at_15%_0%,var(--color-accent-soft),transparent),radial-gradient(900px_600px_at_85%_10%,rgba(181,126,220,0.25),transparent)]">
      <Header />
      <main id="top" className="flex-1">
        <Hero />
        <div className="mx-auto w-full max-w-5xl px-6 pb-20">
          <div className="grid gap-14">
            <ExperienceSection />
            <ProjectsSection />
            <WebsitesSection />
            <RevelationSection />
            <EducationSection />
            <ContactSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
