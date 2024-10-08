import { getProjectById } from '../../utils/projectUtils';
import ProjectDetails from '../../components/ProjectDetails';

interface PageProps {
  params: {
    projectId: string;
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProjectById(params.projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectDetails project={project} />;
}