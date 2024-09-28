import React from 'react';

type Params = {
    projectId: string;
  };
  
const Page = ({ params }: { params: Params }) => {
  return (
      <div>
            <p>{params.projectId}</p>
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
    );
  };
  
 
export default Page;