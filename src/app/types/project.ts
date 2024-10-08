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
  
  export interface Skill {
    name: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  }