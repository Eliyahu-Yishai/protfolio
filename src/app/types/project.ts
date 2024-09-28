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
  
  // ניתן להוסיף טיפוסים נוספים כאן
  export interface Skill {
    name: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  }