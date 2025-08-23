import { PROJECTS } from "@/lib/utils";
import ProjectCard from "./ProjectCard";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Section from "./Section";

export default function ProjectSection() {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <Section className="mx-6 sm:mx-36 xl:mx-20 2xl:mx-48">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center w-full mb-16">
          <h3 className="text-7xl font-semibold text-white">Projects</h3>
        </div>
        <div
          ref={ref}
          className="overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-10 xl:gap-12"
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} inView={inView} />
          ))}
        </div>
      </div>
    </Section>
  );
}
