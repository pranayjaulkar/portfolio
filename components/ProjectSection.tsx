import { getProjects } from "@/lib/utils";
import ProjectCard from "./ProjectCard";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ProjectSectionProps {}

const ProjectSection: React.FC<ProjectSectionProps> = () => {
  const projects = getProjects();
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div>
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 2 } }}
        className="text-4xl md:text-6xl text-center text-primary mb-16 md:mb-8  font-anton tracking-wide"
      >
        Projects
      </motion.h3>
      <div
        ref={ref}
        className=" overflow-hidden flex flex-wrap flex-col md:flex-row justify-center items-center "
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} inView={inView} />
        ))} 
      </div>
    </div>
  );
};
export default ProjectSection;
