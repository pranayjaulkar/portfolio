interface ColumnCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  projectUrl: string;
}
import ReactIcon from "@/components/icons/react-icon.svg";
import GithubLightIcon from "@/components/icons/github-icon-light";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import OpenInNewWindowIcon from "./icons/open-in-new-window-icon.svg";

export const ColumnCard: React.FC<ColumnCardProps> = ({
  title,
  description,
  technologies,
  image,
  githubUrl,
  projectUrl,
}) => {
  return (
    <div className="w-[400px] text-white border shadow-md m-4 p-4 rounded-xl bg-primary">
      <div className="flex w-full bg-white rounded-md">
        <Image src={ReactIcon} alt="" width={300} />
      </div>
      <div>
        <div className="text-2xl font-medium my-4 flex space-x-2 overflow-hidden  items-center">
          <h2>{title}</h2>
          <a href={projectUrl} target="_blank">
            <Image alt="" src={OpenInNewWindowIcon} width={20} />
          </a>
          <a
            href={githubUrl}
            className=" fill-white hover:fill-secondary"
            target="_blank"
          >
            <GithubLightIcon className="fill-inherit"  width={30} />
          </a>
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
