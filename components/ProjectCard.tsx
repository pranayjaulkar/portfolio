interface ColumnCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
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
        className="h-full w-full overflow-hidden flex flex-col border rounded-xl border-gray-700"
      >
        <div
          className="w-full h-40 bg-white border-none"
          style={{
            backgroundImage: `url(${image.replace(
              "upload/",
              `upload/${"w_500"}/`
            )})`,
            backgroundSize: "cover",
          }}
        ></div>
        <motion.div
          whileHover={animation.whileHover}
          className="w-full grow flex flex-col text-white border-t border-none p-4 bg-slate-900"
        >
          {/* Title */}
          <div className="relative text-2xl font-bold pb-2 flex text-secondary  items-center space-x-2 w-fit">
            <h2 className="overlfow-hidden">{title}</h2>
          </div>

          {/* Links */}
          <div className="flex flex-col mb-4 space-y-0.5">
            <div
              className={`w-fit text-sm text-white flex items-center space-x-2 py-0.5 ${
                inDevelopment ? "" : "fill-white hover:underline"
              }`}
            >
              <a className="hover:fill-secondary hover:scale-125 duration-200 " href={projectUrl} target="_blank">
                <OpenInNewWindowIcon width={16} />
              </a>
              <a
                href={githubUrl}
                className="hover:fill-secondary hover:scale-125 duration-200 w-fit text-white hover:underline flex items-center space-x-2 py-0.5 fill-white"
                target="_blank"
              >
                <GithubLightIcon className="fill-inherit" width={16} />
              </a>
            </div>
          </div>

          {/* Description */}
          <p className="break-words mb-2 min-h-16 text-sm">{description}</p>

          {/* Badges */}
          <div className="flex flex-wrap space-x-1">
            {technologies.map((technology, i) => (
              <div key={technology} className="py-0.5">
                <Badge
                  className={`${
                    i % 2 === 0
                      ? "bg-secondary text-black  "
                      : "bg-primary text-white "
                  } hover:${
                    i % 2 === 0 ? "bg-secondary" : "bg-white"
                  } rounded-full py-0`}
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
