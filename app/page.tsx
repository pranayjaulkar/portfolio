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
          <Navbar />
          <IntroductionSection />
          <AboutSection />
          <SkillSection />
          <ProjectSection />
          <ContactSection />
        </main>
      </BackgroundImage>
    </>
  );
}
