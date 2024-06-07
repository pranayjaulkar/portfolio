"use client";
import Navbar from "@/components/Navbar";
import SkillSection from "@/components/SkillSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/AboutSection";
import IntroductionSection from "@/components/IntroductionSection";
import BackgroundImage from "@/components/BackgroundImage";

export default function Home() {
  return (
    <>
      <BackgroundImage>
        <main className="absolute top-0 left-0 w-screen h-screen overflow-y-scroll overflow-x-hidden">
          <div>
            <section id="home" className="h-[70vh] md:h-[101vh]">
              <Navbar />
              <IntroductionSection />
            </section>
            <section>
              <div id="about" className="pb-40 md:pb-40">
                <AboutSection />
              </div>
            </section>
            <section id="skills">
              <div className="pb-40 md:pb-40">
                <SkillSection />
              </div>
            </section>
            <section id="projects">
              <div className="pb-40 md:pb-40">
                <ProjectSection />
              </div>
            </section>
            <section id="contact">
              <ContactSection />
            </section>
          </div>
        </main>
      </BackgroundImage>
    </>
  );
}
