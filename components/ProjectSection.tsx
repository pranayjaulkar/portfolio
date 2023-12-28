import ProjectCard from "./ProjectCard";

interface ProjectSectionProps {}

export const ProjectSection: React.FC<ProjectSectionProps> = () => {
  const projects = [
    {
      title: "Yelpcamp",
      description:
        "Yelpcamp is a social media website.adhgd aslkfh sfglhknsmgfdkhnsfgjkhncfsvjkbncjksvnbcxvnbncxvbncvbncvbncvxbjcxvbjkcsvbjkscnvjknb",
      image: "",
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
        "Memories is a social media website.adhgd aslkfh sfglhknsmgfdkhnsfgjkhncfsvjkbncjksvnbcxvnbncxvbncvbncvbncvxbjcxvbjkcsvbjkscnvjknb",
      image: "",
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
  ];
  return (
    <div className="flex justify-center items-center ">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
};
export default ProjectSection;
