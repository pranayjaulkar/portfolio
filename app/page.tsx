"use client";
import Navbar from "@/components/Navbar";
import SkillSection from "@/components/SkillSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/AboutSection";
import IntroductionSection from "@/components/IntroductionSection";

export default function Home() {
  return (
    <main className="main-container">
      <div className="absolute">
        <section className="h-[70vh] md:h-[100vh]">
          <Navbar />
          <IntroductionSection />
        </section>
        <section>
          <div className="pb-40">
            <AboutSection />
          </div>
        </section>
        <section>
          <div className="pb-40">
            <SkillSection />
          </div>
        </section>
        <section>
          <div className="pb-40">
            <ProjectSection />
          </div>
        </section>
        <section>
          <ContactSection />
        </section>
      </div>
    </main>
  );
}
