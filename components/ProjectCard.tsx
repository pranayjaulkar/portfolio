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
    <div className="w-[400px] text-white border shadow-md m-4 p-4 rounded-xl bg-primary">
      <div className="flex w-full bg-white rounded-md">
        <Image src={ReactIcon} alt="" width={300} />
      </div>
      <div>
        <div className="text-2xl font-medium mt-4 mb-2 flex space-x-2 overflow-hidden  items-center">
          <h2>{title}</h2>
        </div>
        <div className="flex space-y-2 justify-center flex-col items-start">
          {inDevelopment ? (
            <a
              href={projectUrl}
              className="bg-white  
            rounded-md 
            text-sm 
            flex 
            items-center 
            space-x-2 
            px-2 
            py-1 text-black  
            fill-black 
            "
              target="_blank"
            >
              <NodesIconLight width={20} />
              <div>In Development</div>
            </a>
          ) : (
            <a
              href={projectUrl}
              className="bg-white  
            rounded-md 
            text-sm 
            flex 
            items-center 
            space-x-2 
            px-2 
            py-1 text-black  
            hover:text-primary 
            fill-black 
            hover:fill-primary
            "
              target="_blank"
            >
              <OpenInNewWindowIcon width={20} />
              <div>{domain}</div>
            </a>
          )}

          <a
            href={projectUrl}
            className="bg-white  
            rounded-md 
            text-sm 
            flex 
            items-center 
            space-x-2 
            px-2 
            py-1 
            text-black  
            hover:text-primary 
            fill-black 
            hover:fill-primary"
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
        <div className="break-words mb-4 text-sm">{description}</div>
      </div>
      <div className="flex flex-wrap">
        {technologies.map((technology, i) => (
          <div key={technology} className="py-1">
            <Badge
              className={`${i % 2 === 0 ? "bg-secondary" : "bg-white"} hover:${
                i % 2 === 0 ? "bg-secondary" : "bg-white"
              } text-black font-bold mx-1`}
            >
              {technology}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ColumnCard;
