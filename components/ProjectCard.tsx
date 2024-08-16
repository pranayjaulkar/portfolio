interface ColumnCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  domain: string;
  githubUrl: string;
  projectUrl: string;
  inDevelopment?: boolean;
  inView?: boolean;
  animation: any;
}
import GithubLightIcon from "@/components/assets/icons/github-icon-light";
import { Badge } from "@/components/ui/badge";
import OpenInNewWindowIcon from "./assets/icons/open-in-new-window-icon";
import NodesIconLight from "./assets/icons/nodes-icon-light";
import { motion } from "framer-motion";

export default function ColumnCard({
  title,
  description,
  technologies,
  image,
  inDevelopment,
  domain,
  githubUrl,
  projectUrl,
  inView,
  animation,
}: ColumnCardProps) {
  return (
    <div>
      <motion.div
        {...animation}
        animate={inView ? animation.animate : ""}
        className="h-full w-full overflow-hidden flex flex-col min-w-52 min-h-80 border rounded-2xl border-gray-700"
      >
        <div
          className="w-full h-52 bg-white border-none"
          style={{
            backgroundImage: `url(${image.replace("upload/", `upload/${"w_500"}/`)})`,
            backgroundSize: "cover",
          }}
        ></div>
        <motion.div
          whileHover={animation.whileHover}
          className="w-full grow flex flex-col text-white border-t border-none p-4 bg-slate-900"
        >
          {/* Title */}
          <div className="text-3xl font-bold pb-6 flex overflow-hidden text-secondary  items-center">
            <h2>{title}</h2>
          </div>

          {/* Links */}
          <div className="flex flex-col mb-4">
            <div
              className={`bg-primary w-fit text-sm md:text-[16px] text-white rounded-md flex items-center space-x-2 px-2 py-1 ${
                inDevelopment ? "" : "fill-white hover:bg-primary-dark hover:underline"
              }`}
            >
              {inDevelopment ? (
                <>
                  <NodesIconLight width={20} />
                  <div>In Development</div>
                </>
              ) : (
                <>
                  <OpenInNewWindowIcon width={20} />
                  <a href={projectUrl} target="_blank">
                    {domain}
                  </a>
                </>
              )}
            </div>

            <a
              href={githubUrl}
              className="bg-primary w-fit hover:bg-primary-dark text-sm md:text-[16px] text-white hover:underline  rounded-lg flex  items-center  space-x-2  px-2  py-1  mt-2  fill-white"
              target="_blank"
            >
              <GithubLightIcon className="fill-inherit" width={20} />
              <div>Github Repository</div>
            </a>
          </div>

          {/* Description */}
          <p className="break-words mb-4 text-sm md:text-[16px] min-h-16">{description}</p>

          {/* Badges */}
          <div className="flex flex-wrap">
            {technologies.map((technology, i) => (
              <div key={technology} className="py-1">
                <Badge
                  className={`${i % 2 === 0 ? "bg-secondary text-black  " : "bg-primary text-white "} hover:${
                    i % 2 === 0 ? "bg-secondary" : "bg-white"
                  } mx-1 rounded-full`}
                >
                  {technology}
                </Badge>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
