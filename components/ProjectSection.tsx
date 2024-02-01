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
        "Zest is an ecommerce website where you can create your own stores and manage them using Zest Dashboard.",
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
      <h3 className="text-4xl md:text-6xl text-center text-primary mb-16 md:mb-24  font-anton tracking-wide">
        Projects
      </h3>
      <div className="flex flex-wrap flex-col md:flex-row justify-center items-center ">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};
export default ProjectSection;
