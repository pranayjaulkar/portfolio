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
import CppIcon from "./icons/cpp-icon.svg";
import GitIcon from "./icons/git-icon.svg";

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
      icon: CppIcon,
      name: "C/C++",
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
      icon: GitIcon,
      name: "Git/Github",
    },
    {
      icon: BootstrapIcon,
      name: "Bootstrap",
    },
    {
      icon: TailwindIcon,
      name: "Tailwind CSS",
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
    <div className="max-w-[75%] md:max-w-[65%] xl:max-w-[55%] mx-auto">
      <h3 className="flex justify-center items-center text-4xl md:text-6xl text-primary mb-16 md:mb-24  font-anton tracking-wide">
        Technologies and Tools
      </h3>
      <div
        className="
      grid 
      grid-cols-3 
      md:grid-cols-4 
      lg:grid-cols-5 
      xl:grid-cols-6
      gap-x-8 
      gap-y-12 
      justify-items-center"
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="space-y-4 flex flex-col items-center justify-between "
          >
            <div className=" w-20 h-20  md:w-24 md:h-24 p-4 md:px-0 flex justify-center items-center  bg-gray-800 rounded-full">
              <Image
                src={skill.icon}
                width={skill.name === "NextJS" ? "70" : "55"}
                alt=""
              />
            </div>

            <h4 className="text-center text-white">{skill.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SkillSection;
