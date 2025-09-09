"use client";
import Navbar from "@/components/Navbar";
import SkillSection from "@/components/SkillSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import IntroductionSection from "@/components/IntroductionSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main
      style={{ background: "linear-gradient(221deg, #23024d, #07101a)" }}
      className="w-screen h-screen overflow-x-hidden"
    >
      <Navbar />
      <IntroductionSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
