import ReactIcon from "./icons/react-icon.svg";
import PythonIcon from "./icons/python-icon.svg";
import MongodbIcon from "./icons/mongodb-icon.svg";
import MysqlIcon from "./icons/mysql-icon.svg";
import NextjsIcon from "./icons/nextjs-icon.svg";
import NodejsIcon from "./icons/nodejs-icon.svg";
import ReduxIcon from "./icons/redux-icon.svg";
import ExpressIcon from "./icons/express-icon.svg";
import ExpressjsIcon from "./icons/expressjs-icon.svg";
import HtmlIcon from "./icons/html-icon.svg";
import CssIcon from "./icons/css-icon.svg";
import BootstrapIcon from "./icons/bootstrap-icon.svg";
import TailwindIcon from "./icons/tailwind-icon.svg";
import TypescriptIcon from "./icons/typescript-icon.svg";
import JavascriptIcon from "./icons/javascript-icon.svg";

import Image from "next/image";
interface SkillSectionProps {}

export const SkillSection: React.FC<SkillSectionProps> = () => {
  const skills = [
    {
      icon: ReactIcon,
      name: "ReactJS",
    },
    {
      icon: NextjsIcon,
      name: "NextJS",
    },
    {
      icon: ExpressIcon,
      name: "ExpressJS",
    },
    {
      icon: ReduxIcon,
      name: "Redux Toolkit",
    },
    {
      icon: NodejsIcon,
      name: "NodeJS",
    },
    {
      icon: MongodbIcon,
      name: "MongoDB",
    },
    {
      icon: MysqlIcon,
      name: "MySQL",
    },

    {
      icon: PythonIcon,
      name: "Python",
    },
    {
      icon: JavascriptIcon,
      name: "Javascript",
    },
    {
      icon: TypescriptIcon,
      name: "Typescript",
    },

    {
      icon: BootstrapIcon,
      name: "Bootstrap",
    },
    {
      icon: TailwindIcon,
      name: "Tailwind",
    },
    {
      icon: HtmlIcon,
      name: "HTML",
    },
    {
      icon: CssIcon,
      name: "CSS",
    },
  ];
  return (
    <div className="max-w-[75%] md:max-w-[65%] xl:max-w-[55%] mx-auto py-12">
      <div className="grid grid-cols-3 grid-rows-5 md:grid-cols-4 md:grid-rows-4 lg:grid-cols-5 lg:grid-rows-3 xl:grid-cols-7 xl:grid-rows-5  gap-x-4 gap-y-8 justify-items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="space-y-4 flex flex-col items-center justify-between"
          >
            <div className="w-20 flex justify-center grow">
              <Image
                src={skill.icon}
                width={skill.name === "NextJS" ? "70" : "65"}
                alt=""
              />
            </div>

            <h4 className="text-center">{skill.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SkillSection;
