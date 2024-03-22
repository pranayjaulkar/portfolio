interface ColumnCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  domain: string;
  githubUrl: string;
  projectUrl: string;
  inDevelopment: boolean;
  inView?: boolean;
  animation: any;
}
import GithubLightIcon from "@/components/assets/icons/github-icon-light";
import { Badge } from "@/components/ui/badge";
import OpenInNewWindowIcon from "./assets/icons/open-in-new-window-icon";
import NodesIconLight from "./assets/icons/nodes-icon-light";
import { motion } from "framer-motion";

const ColumnCard: React.FC<ColumnCardProps> = ({
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
}) => {
  return (
    <motion.div
      {...animation}
      animate={inView ? animation.animate : ""}
      className="mx-8 my-16 h-full overflow-hidden border"
    >
      <div className="w-full h-[200px]">
        <div
          className="flex w-full h-full bg-white "
          style={{
            backgroundImage: `url(${image.replace(
              "upload/",
              `upload/${"w_500"}/`
            )})`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className="w-[350px] text-white border-t border-white p-4 bg-black">
        <div>
          <div className="text-3xl pt-4 pb-6 flex overflow-hidden text-primary  items-center font-anton tracking-wide">
            <h2>{title}</h2>
          </div>
          <div className="flex justify-center flex-col mb-4 items-start">
            <div
              className={`bg-primary text-white rounded-md text-sm flex items-center space-x-2 px-2 py-1 ${
                inDevelopment
                  ? ""
                  : "fill-white hover:bg-primary-dark hover:underline"
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
              href={projectUrl}
              className="bg-primary hover:bg-primary-dark text-white hover:underline  rounded-lg text-sm  flex  items-center  space-x-2  px-2  py-1  mt-2  fill-white"
              target="_blank"
            >
              <GithubLightIcon className="fill-inherit" width={20} />
              <div>Github Repository</div>
            </a>
            <a
              href={githubUrl}
              className=" fill-white hover:fill-secondary"
              target="_blank"
            ></a>
          </div>
          <div className="break-words mb-4  text-md min-h-16">
            {description}
          </div>
        </div>
        <div className="flex flex-wrap">
          {technologies.map((technology, i) => (
            <div key={technology} className="py-1">
              <Badge
                className={`${
                  i % 2 === 0
                    ? "bg-secondary text-black  "
                    : "bg-primary text-white "
                } hover:${
                  i % 2 === 0 ? "bg-secondary" : "bg-white"
                } mx-1 rounded-md`}
              >
                {technology}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export default ColumnCard;
