"use client";
import Navbar from "@/components/Navbar";
import SkillSection from "@/components/SkillSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/AboutSection";
import IntroductionSection from "@/components/IntroductionSection";
import BackgroundImage from "@/components/BackgroundImage";
import { useState } from "react";
import Loader from "@/components/Loader";

export default function Home() {
  const [image, setImage] = useState<string | undefined>(undefined);
  const [showUI, setShowUI] = useState(false);

  return (
    <>
      <BackgroundImage image={image} setImage={setImage} setShowUI={setShowUI}>
        {showUI ? (
          <main className="absolute top-0 left-0 w-screen h-screen overflow-y-scroll overflow-x-hidden">
            <div>
              <section className="h-[70vh] md:h-[101vh]">
                <Navbar />
                <IntroductionSection />
              </section>
              <section>
                <div className="pb-40 md:pb-80">
                  <AboutSection />
                </div>
              </section>
              <section>
                <div className="pb-40 md:pb-80">
                  <SkillSection />
                </div>
              </section>
              <section>
                <div className="pb-40 md:pb-80">
                  <ProjectSection />
                </div>
              </section>
              <section>
                <ContactSection />
              </section>
            </div>
          </main>
        ) : (
          <Loader />
        )}
      </BackgroundImage>
    </>
  );
}
