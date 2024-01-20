interface ColumnCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  domain: string;
  githubUrl: string;
  projectUrl: string;
  inDevelopment: boolean;
}
import ReactIcon from "@/components/icons/react-icon.svg";
import GithubLightIcon from "@/components/icons/github-icon-light";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import OpenInNewWindowIcon from "./icons/open-in-new-window-icon";
import NodesIconLight from "./icons/nodes-icon-light";

export const ColumnCard: React.FC<ColumnCardProps> = ({
  title,
  description,
  technologies,
  image,
  inDevelopment,
  domain,
  githubUrl,
  projectUrl,
}) => {
  return (
    <div className="mx-4 my-8 h-full overflow-hidden border">
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
          <div className="text-2xl pt-4 pb-6 flex overflow-hidden text-primary  items-center font-anton tracking-wide">
            <h2>{title}</h2>
          </div>
          <div className="flex justify-center flex-col mb-4 items-start">
            {inDevelopment ? (
              <div
                className="bg-primary text-white  rounded-md text-sm flex items-center space-x-2 px-2 py-1   fill-white
            "
              >
                <NodesIconLight width={20} />
                <div>In Development</div>
              </div>
            ) : (
              <a
                href={projectUrl}
                className=" bg-primary hover:bg-primary-dark  text-white hover:underline fill-white rounded-md text-sm flex items-center space-x-2 px-2 py-1 
            "
                target="_blank"
              >
                <OpenInNewWindowIcon width={20} />
                <div>{domain}</div>
              </a>
            )}

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
    </div>
  );
};
export default ColumnCard;
