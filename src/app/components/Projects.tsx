import React from 'react';
import styles from "../styles/Projects.module.css";
import sectionStyles from "../styles/Experience.module.css";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projects.json";
import { Project } from "../types/project";

const Projects: React.FC = () => {
  const projects: Project[] = projectsData.projects;

  return (
    <section id="projects" className={styles.projectsSection}>
      <h1 className={sectionStyles.sectionTitle}>My Projects</h1>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;