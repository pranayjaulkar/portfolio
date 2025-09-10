interface ColumnCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  projectUrl: string;
  inView?: boolean;
}
import GithubLightIcon from "@/components/assets/icons/github-icon-light";
import OpenInNewWindowIcon from "./assets/icons/open-in-new-window-icon";
import { motion } from "framer-motion";

export default function ColumnCard({
  title,
  description,
  technologies,
  image,
  githubUrl,
  projectUrl,
  inView,
}: ColumnCardProps) {
  return (
    <motion.div
      transition={{ delay: 0.5, duration: 1 }}
      animate={
        inView
          ? {
              x: [40, 0],
              opacity: [0, 1],
            }
          : ""
      }
      className="max-w-[1000px] md:h-[400px] lg:h-[350px] overflow-hidden border border-gray-700 flex flex-col md:flex-row items-center"
    >
      {
        //  =====================  Background IMage  =====================
      }
      <img
        className="w-full md:w-1/3 h-1/3 md:h-full object-cover hover:opacity-70 transition-all duration-300 cursor-pointer bg-white border-none"
        src={image.replace("upload/", `upload/${"w_500"}/`)}
      />

      {
        //  =====================  Content  =====================
      }
      <motion.div className="w-full h-full flex-1 p-4 md:pl-10 flex flex-col text-white bg-slate-900 space-y-4">
        {/* Title */}
        <div className="relative text-2xl font-bold flex text-secondary  items-center space-x-2 w-fit">
          <h2 className="overlfow-hidden">{title}</h2>
          {/* Links */}
          <div className="flex flex-col space-y-0.5">
            <div className={`w-fit text-sm  flex items-center space-x-2 py-0.5 fill-zinc-300 hover:underline`}>
              <a className="hover:fill-secondary hover:scale-125 duration-200 " href={projectUrl} target="_blank">
                <OpenInNewWindowIcon width={16} />
              </a>
              <a
                href={githubUrl}
                className="hover:fill-secondary hover:scale-125 duration-200 w-fit  hover:underline flex items-center space-x-2 py-0.5 fill-zinc-300"
                target="_blank"
              >
                <GithubLightIcon className="fill-inherit" width={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="break-words text-zinc-300 text-xs leading-5 mb-auto">{description}</p>

        {/* Badges */}
        <div className="flex flex-wrap space-x-2">
          {technologies.map((technology, i) => (
            <div className="py-1.5">
              <span className="text-xs border px-3 py-1 border-gray-700 text-secondary">{technology}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
