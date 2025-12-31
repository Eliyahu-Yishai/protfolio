import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/ProjectCard.module.css';
import { Project } from '../types/project';


interface ProjectCardProps {
    project: Project;
  }
  
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  
    return (
      <div className={styles.card}>
        {project?.images && project?.images[0] && <Image
          src={project.images[0]}
          alt={project.title}
          width={300}
          height={200}
          className={styles.image}
        />}
        <div className={styles.content}>
          <h3>{project.title}</h3>
          <div className={styles.description}>
             <p>{project.description.substring(0, 100)}...</p>
          </div>
          <div className={styles.tags}>
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className={styles.tag}>{tech}</span>
            ))}
          </div>
          <Link
            href={{
              pathname: `/projects/${project.id}`,
            }}
            className={styles.button}
          >
            View Project
          </Link>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;