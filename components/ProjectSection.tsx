import { PROJECTS } from "@/lib/utils";
import ProjectCard from "./ProjectCard";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Section from "./Section";

export default function ProjectSection() {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <section className="mx-10 md:mx-20 lg:mx-40 xl:mx-52 2xl:mx-64 mb-80">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center w-full mb-14">
          <h3 className="text-4xl font-semibold text-white">PROJECTS</h3>
        </div>
        <div ref={ref} className="overflow-hidden flex flex-col space-y-20">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
