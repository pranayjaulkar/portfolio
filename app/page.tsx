"use client";
import Navbar from "@/components/Navbar";
import SkillSection from "@/components/SkillSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import IntroductionSection from "@/components/IntroductionSection";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-[#07101a] overflow-x-hidden">
      <Navbar />
      <IntroductionSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
