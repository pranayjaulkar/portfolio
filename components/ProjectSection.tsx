import ProjectCard from "./ProjectCard";

interface ProjectSectionProps {}

export const ProjectSection: React.FC<ProjectSectionProps> = () => {
  const projects = [
    {
      title: "Yelpcamp",
      description:
        "Yelpcamp is a social media website for campers where they can share their favorite camping places and comment on them.",
      image:
        "https://res.cloudinary.com/dphpgb4hg/image/upload/v1678196778/chris-holder-uY2UIyO5o5c-unsplash_chc92i.jpg",
      inDevelopment: false,
      domain: "yelpcamp-project-dmx9.onrender.com",
      technologies: [
        "ExpressJS",
        "NodeJS",
        "Mongodb",
        "EJS",
        "Mongoose",
        "JOI",
        "Cloudinary",
        "PassportJS",
        "Mapbox",
      ],
      githubUrl: "https://github.com/pranayjaulkar/yelpcamp",
      projectUrl: "https://yelpcamp-project-dmx9.onrender.com",
    },
    {
      title: "Memories",
      description:
        "Memories is a social media website for people where they can post pictures of happy or sad moments in their life",
      image:
        "https://res.cloudinary.com/dphpgb4hg/image/upload/v1704609590/lckgflnisv8ykxt9wzys.jpg",
      inDevelopment: false,
      domain: "memories-lyng.onrender.com",
      technologies: [
        "ReactJS",
        "ExpressJS",
        "NodeJS",
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
    },
    {
      title: "Zest",
      description:
        "Zest is an ecommerce website where you can explore products and create your own store.",
      image:
        "https://res.cloudinary.com/dphpgb4hg/image/upload/v1704609590/rhxc61bxxjtkgufybpci.jpg",
      inDevelopment: true,
      domain: "memories-lyng.onrender.com",
      technologies: [
        "ReactJS",
        "ExpressJS",
        "NodeJS",
        "Mongodb",
        "Mongoose",
        "Material UI",
        "Tailwind CSS",
        "JOI",
        "Cloudinary",
        "JWT",
      ],
      githubUrl: "https://github.com/pranayjaulkar/ecommerce-website/",
      projectUrl: "https://memories-lyng.onrender.com",
    },
  ];
  return (
    <div>
      <div className="w-full flex justify-center">
        <h3 className="text-3xl md:text-5xl text-center text-primary mb-4  md:mb-16 font-anton tracking-wide">
          Projects
        </h3>
      </div>
      <div className="flex flex-wrap flex-col md:flex-row justify-center items-center ">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};
export default ProjectSection;
