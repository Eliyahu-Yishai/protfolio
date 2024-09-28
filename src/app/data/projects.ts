import { Project } from "../types/project";


const projects: Project[] = [
    {
      id: "1",
      title: "Project 1",
      description: "This is a description of project 1",
      image: "/images/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "/projects/project1"
    },
    {
      id: "2",
      title: "Project 2",
      description: "This is a description of project 2",
      image: "/images/project2.jpg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "/projects/project2",
      githubLink: "./"
    },
    {
      id: "3",
      title: "Project 3",
      description: "This is a description of project 3",
      image: "/images/project3.jpg",
      technologies: ["Angular", "Express", "MySQL"],
      link: "/projects/project3",
      githubLink: "./"
    },
    {
      id: "4",
      title: "Project 4",
      description: "This is a description of project 4",
      image: "/images/project4.jpg",
      technologies: ["Vue", "Nest.js", "PostgreSQL"],
      link: "/projects/project4",
      githubLink: "./"
    }
  ];

  export default projects;
  