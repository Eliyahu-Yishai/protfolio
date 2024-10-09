export interface Project {
    id: string;
    title: string;
    description: string;
    images: string[];
    technologies: string[];
    githubLink: string; // 
    date?: Date; // 
  }
  
  export type ProjectList = Project[];
  
