'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Youtube } from 'lucide-react';
import styles from '../styles/ProjectDetails.module.css';
import { Project } from '../types/project';
import { Github } from 'lucide-react'

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <div className={styles.gallery}>
          <div className={styles.galleryInner} style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
            {project.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                width={550}
                height={550}
                className={styles.galleryImage}
              />
            ))}
          </div>
          {project.images.length > 1 && (
            <>
              <button className={`${styles.galleryButton} ${styles.prevButton}`} onClick={prevImage}>
                <ChevronLeft size={24} />
              </button>
              <button className={`${styles.galleryButton} ${styles.nextButton}`} onClick={nextImage}>
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.technologies}>
            <h3>Technologies Used:</h3>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className={styles.links}> 
                {project.githubLink && (
                  <Link 
                      href={project.githubLink} className={styles.githubLink}>
                          <p>View on Github</p> 
                          <Github size={24} />
                  </Link>
                )}

                {project.youtubeLink && (
                <Link href={project.youtubeLink} className={styles.youtubeLink}>
                       <p>View Demo</p>
                        <Youtube size={24} />
                </Link>
                )}           
            </div>
          </div>
        </div>
    </div>
  );
};

export default ProjectDetails;