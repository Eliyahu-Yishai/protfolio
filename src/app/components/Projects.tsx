
import styles from "../styles/Projects.module.css";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const Projects: React.FC = () => {
    return (
      <section id="projects" className={styles.projectsSection}>
        <h2>My Projects</h2>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    );
  };
  
 export default Projects; 

  