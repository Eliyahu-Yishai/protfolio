export interface Project {
    id: string;
    title: string;
    description: string;
    images: string[];
    technologies: string[];
    githubLink: string; 
    youtubeLink?: string;
    date?: Date; 
  }
  
  export type ProjectList = Project[];
  
