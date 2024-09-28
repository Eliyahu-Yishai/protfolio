export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link: string;
    githubLink?: string; // אופציונלי
    date?: Date; // אופציונלי
  }
  
  export type ProjectList = Project[];
  
  export interface Skill {
    name: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  }