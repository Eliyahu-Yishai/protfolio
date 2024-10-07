// src/utils/projectUtils.ts

import projectsData from '../data/projects.json';
import { Project } from '../types/project';

export const getProjectById = (id: string): Project | undefined => {
  const project = projectsData.projects.find(project => project.id === id);
  if (project) {
    return {
      ...project,
      images: project.images ? project.images : []
    } as Project;
  }
  return undefined;
};