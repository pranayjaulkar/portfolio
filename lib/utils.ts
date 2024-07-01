import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import ReactIcon from "../components/assets/icons/react-icon.svg";
import PythonIcon from "../components/assets/icons/python-icon.svg";
import MongodbIcon from "../components/assets/icons/mongodb-icon.svg";
import MysqlIcon from "../components/assets/icons/mysql-icon.svg";
import NextJSIcon from "../components/assets/icons/nextjs-icon.svg";
import NodeJSIcon from "../components/assets/icons/nodejs-icon.svg";
import ReduxIcon from "../components/assets/icons/redux-icon.svg";
import ExpressIcon from "../components/assets/icons/express-icon.svg";
import HtmlIcon from "../components/assets/icons/html-icon.svg";
import CssIcon from "../components/assets/icons/css-icon.svg";
import BootstrapIcon from "../components/assets/icons/bootstrap-icon.svg";
import TailwindIcon from "../components/assets/icons/tailwind-icon.svg";
import TypescriptIcon from "../components/assets/icons/typescript-icon.svg";
import JavascriptIcon from "../components/assets/icons/javascript-icon.svg";
import CppIcon from "../components/assets/icons/cpp-icon.svg";
import GitIcon from "../components/assets/icons/git-icon.svg";
import GithubIconLight from "@/components/assets/icons/github-icon-light";
import TwitterIcon from "@/components/assets/icons/twitter-icon-light";
import LinkedinIcon from "@/components/assets/icons/linkedin-icon-light";
import InstagramIcon from "@/components/assets/icons/instagram-icon-light";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getProjects() {
  return [
    {
      title: "Yelpcamp",
      description:
        "Yelpcamp is a social media website for campers where they can share their favorite camping places and comment on them.",
      image:
        "https://res.cloudinary.com/dphpgb4hg/image/upload/v1678196778/chris-holder-uY2UIyO5o5c-unsplash_chc92i.jpg",
      inDevelopment: false,
      domain: "yelpcamp-project-dmx9.onrender.com",
      technologies: ["Express.js", "Node.js", "Mongodb", "EJS", "Mongoose", "JOI", "Cloudinary", "Passport.js", "Mapbox"],
      githubUrl: "https://github.com/pranayjaulkar/yelpcamp",
      projectUrl: "https://yelpcamp-project-dmx9.onrender.com",
      animation: {
        animate: {
          y: [40, 0],
          opacity: [0, 0, 0.2, 1],
        },
        transition: { delay: 0.5, duration: 1 },
      },
    },
    {
      title: "Memories",
      description:
        "Memories is a social media website for people where they can post pictures of happy or sad moments in their life",
      image: "https://res.cloudinary.com/dphpgb4hg/image/upload/v1704609590/lckgflnisv8ykxt9wzys.jpg",
      inDevelopment: false,
      domain: "memories-lyng.onrender.com",
      technologies: [
        "React.js",
        "Express.js",
        "Node.js",
        "Mongodb",
        "Mongoose",
        "Material UI",
        "Tailwind CSS",
        "JOI",
        "Cloudinary",
        "JWT",
      ],
      githubUrl: "https://github.com/pranayjaulkar/Memories-MERN/",
      projectUrl: "https://memories-lyng.onrender.com",
      animation: {
        animate: {
          y: [-40, 0],
          opacity: [0, 1],
        },
        transition: { delay: 0.5, duration: 1 },
      },
    },
    {
      title: "Zest",
      description:
        "Zest is an ecommerce website where you can create your own stores and manage them using Zest Dashboard.",
      image: "https://res.cloudinary.com/dphpgb4hg/image/upload/v1704609590/rhxc61bxxjtkgufybpci.jpg",
      domain: "zest-store.vercel.app",
      technologies: [
        "Next.js",
        "Clerk",
        "Supabase",
        "PostgreSQL",
        "Prisma",
        "Tailwind CSS",
        "Node.js",
        "Zod",
        "Zustand",
        "Cloudinary",
      ],
      githubUrl: "https://github.com/pranayjaulkar/zest-store/",
      projectUrl: "https://zest-store.vercel.app/",
      animation: {
        animate: {
          y: [40, 0],
          opacity: [0, 1],
        },
        transition: { delay: 0.5, duration: 1 },
      },
    },
  ];
}

export function getSkills() {
  return [
    {
      icon: ReactIcon,
      name: "React.js",
    },
    {
      icon: NextJSIcon,
      name: "Next.js",
    },
    {
      icon: ExpressIcon,
      name: "Express.js",
    },
    {
      icon: ReduxIcon,
      name: "Redux Toolkit",
    },
    {
      icon: NodeJSIcon,
      name: "Node.js",
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
}

export const links = [
  { icon: GithubIconLight, url: "https://github.com/pranayjaulkar" },
  { icon: TwitterIcon, url: "https://twitter.com/pranay_jaulkar_" },
  {
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/pranay-jaulkar-30b513206/",
  },
  { icon: InstagramIcon, url: "https://www.instagram.com/pranay_jaulkar_/" },
];