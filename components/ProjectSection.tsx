import { getProjects } from "@/lib/utils";
import ProjectCard from "./ProjectCard";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Section from "./Section";

export default function ProjectSection() {
  const projects = getProjects();
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <Section title="PROJECTS" className="mx-6 sm:mx-36 xl:mx-20 2xl:mx-48">
      <div ref={ref} className="overflow-hidden grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} inView={inView} />
        ))}
      </div>
    </Section>
  );
}
