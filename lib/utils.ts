import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import ReactIcon from "../components/assets/icons/react-icon.svg";
import PythonIcon from "../components/assets/icons/python-icon.svg";
import MongodbIcon from "../components/assets/icons/mongodb-icon.svg";
import PostgreSQLIcon from "../components/assets/icons/postgresql.png";
import NextJSIcon from "../components/assets/icons/nextjs-icon.svg";
import NodeJSIcon from "../components/assets/icons/nodejs-icon.svg";
import ReduxIcon from "../components/assets/icons/redux-icon.svg";
import ExpressIcon from "../components/assets/icons/express-icon.svg";
import HtmlIcon from "../components/assets/icons/html-icon.svg";
import CssIcon from "../components/assets/icons/css-icon.svg";
import JavaIcon from "../components/assets/icons/java.svg";
import BootstrapIcon from "../components/assets/icons/bootstrap-icon.svg";
import TailwindIcon from "../components/assets/icons/tailwind-icon.svg";
import TypescriptIcon from "../components/assets/icons/typescript-icon.svg";
import JavascriptIcon from "../components/assets/icons/javascript-icon.svg";
import CppIcon from "../components/assets/icons/cpp-icon.svg";
import GitIcon from "../components/assets/icons/git-icon.svg";
import DockerIcon from "../components/assets/icons/docker.svg";
import LinuxIcon from "../components/assets/icons/linux.png";
import NginxIcon from "../components/assets/icons/nginx.svg";
import AWSIcon from "../components/assets/icons/aws.svg";
import GraphqlIcon from "../components/assets/icons/graphql.svg";
import GithubIconLight from "@/components/assets/icons/github-icon-light";
import TwitterIcon from "@/components/assets/icons/twitter-icon-light";
import LinkedinIcon from "@/components/assets/icons/linkedin-icon-light";
import InstagramIcon from "@/components/assets/icons/instagram-icon-light";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PROJECTS = [
  {
    title: "Zest",
    description:
      "Zest is a dynamic e-commerce CMS that enables users to create and manage customizable clothing stores with ease. Built on Next.js for both frontend and backend, it integrates Clerk.js for authentication, Stripe for secure payments, and a Supabase + Prisma stack for reliable data management. The platform features a modern, responsive UI powered by ShadCN and Tailwind CSS, while Cloudinary ensures fast and optimized media delivery offering a complete, scalable solution for online store management.",
    image: "https://res.cloudinary.com/dphpgb4hg/image/upload/v1704609590/rhxc61bxxjtkgufybpci.jpg",
    technologies: [
      "Next.js",
      "Clerk",
      "Stripe",
      "Supabase",
      "PostgreSQL",
      "Prisma",
      "Typescript",
      "Tailwind CSS",
      "Node.js",
      "Zod",
      "Zustand",
      "ShadCN",
      "React",
      "Cloudinary",
      "HTML",
      "CSS",
    ],
    githubUrl: "https://github.com/pranayjaulkar/zest-store/",
    projectUrl: "https://zest-store.vercel.app/",
  },
  {
    title: "Travelogue",
    description:
      "Travelogue is a social platform designed for travelers to share experiences, stories, and visuals through posts, images, and interactive comments. Built with a responsive React.js frontend, it integrates a secure Node.js/Express.js backend powered by JWT-based authentication. Featuring MongoDB for data storage, Redux for state management, and Cloudinary for optimized media delivery, Travelogue provides a smooth, engaging, and community-driven travel sharing experience.",
    image: "https://res.cloudinary.com/dphpgb4hg/image/upload/v1704609590/lckgflnisv8ykxt9wzys.jpg",
    inDevelopment: false,
    technologies: [
      "React.js",
      "Express.js",
      "Javascript",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "Material UI",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JOI",
      "Cloudinary",
      "JWT",
    ],
    githubUrl: "https://github.com/pranayjaulkar/Travelogue/",
    projectUrl: "https://travelogue-6agd.onrender.com",
  },
  {
    title: "Yelpcamp",
    isNew: false,
    description:
      "Movies App is a full-stack CRUD application that enables users to add, update, and manage movie collections while also fetching real-time movie data via the Streaming Availability API. Developed with an Angular frontend and Express.js + MongoDB backend, the app ensures a scalable and interactive experience. It incorporates Cloudinary for media management and Tailwind CSS for a clean, responsive interface, making it both functional and visually appealing.",
    image: "https://res.cloudinary.com/dphpgb4hg/image/upload/v1678196778/chris-holder-uY2UIyO5o5c-unsplash_chc92i.jpg",
    inDevelopment: false,
    technologies: [
      "Express.js",
      "Node.js",
      "Mongodb",
      "Javascript",
      "EJS",
      "Mongoose",
      "JOI",
      "Cloudinary",
      "Passport.js",
      "Mapbox",

      "HTML",
      "CSS",
    ],
    githubUrl: "https://github.com/pranayjaulkar/yelpcamp",
    projectUrl: "https://yelpcamp-project-dmx9.onrender.com",
  },
];

export const SKILLS = [
  { icon: ReactIcon, name: "React.js" },
  { icon: NextJSIcon, name: "Next.js" },
  { icon: ExpressIcon, name: "Express.js" },
  { icon: NodeJSIcon, name: "Node.js" },
  { icon: MongodbIcon, name: "MongoDB" },
  { icon: PostgreSQLIcon, name: "PostgreSQL" },
  { icon: TypescriptIcon, name: "Typescript" },
  { icon: JavascriptIcon, name: "Javascript" },
  { icon: AWSIcon, name: "AWS" },
  { icon: DockerIcon, name: "Docker" },
  { icon: GitIcon, name: "Git/Github" },
  { icon: LinuxIcon, name: "Linux" },
  { icon: NginxIcon, name: "NGINX" },
  { icon: GraphqlIcon, name: "GraphQL" },
  { icon: ReduxIcon, name: "Redux" },
  { icon: CppIcon, name: "C/C++" },
  { icon: JavaIcon, name: "Java" },
  { icon: PythonIcon, name: "Python" },
  { icon: TailwindIcon, name: "Tailwind" },
  { icon: BootstrapIcon, name: "Bootstrap" },
  { icon: HtmlIcon, name: "HTML" },
  { icon: CssIcon, name: "CSS" },
];

export const links = [
  {
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/pranay-jaulkar-30b513206/",
  },
  { icon: GithubIconLight, url: "https://github.com/pranayjaulkar" },
  { icon: TwitterIcon, url: "https://twitter.com/pranay_jaulkar_" },
  { icon: InstagramIcon, url: "https://www.instagram.com/pranay_jaulkar_/" },
];
