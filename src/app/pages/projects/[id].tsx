import React from 'react';
import styles from '../../styles/ProjectPage.module.css';
import { useRouter } from 'next/router'


const Page = () => {
    const router = useRouter();
    const projectId = router.query.id;
    if (!projectId) return <div>Project not found</div>;
    
  
    return (
      <div className={styles.container}>
        <div className={styles.content}>
            <p>{projectId}</p>
          {/*<h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className={styles.technologies}>
            <h3>Technologies Used:</h3>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
          {project.githubLink && (
            <Link href={project.githubLink} className={styles.githubLink}>
              View on GitHub
            </Link>
          )}
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
          />
          */}
        </div>
      </div>
    );
  };
  
 
export default Page;