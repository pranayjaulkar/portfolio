import { PROJECTS } from "@/lib/utils";
import ProjectCard from "./ProjectCard";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";

export default function ProjectSection() {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});
	return (
		<section id="projects" className="mx-4 md:mx-20 mb-80">
			<div className="max-w-[1200px] mx-auto">
				<div
					ref={ref}
					className={`flex items-center w-full mb-10 sm:mb-14 transition-all duration-1000 ease-in-out ${
						inView
							? "translate-x-0 opacity-100"
							: "translate-x-20 opacity-0"
					}`}
				>
					<h3 className="text-3xl w-full text-center md:text-left md:text-4xl font-semibold text-white">
						Projects
					</h3>
				</div>
				<div
					ref={ref}
					className="overflow-hidden flex flex-col space-y-12"
				>
					{PROJECTS.map((project) => (
						<ProjectCard
							key={project.title}
							{...project}
							inView={inView}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
