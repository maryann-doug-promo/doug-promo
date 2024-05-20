
// types
import { ProjectType } from '@/personal_types/project';

// component
import { GeneralCard } from '@/shared/_components/generalCard/GeneralCard';

// styles
import styles from './PastProject.module.scss';

interface PastProjectProps {
  project: ProjectType
}

// TODO
// CAN PUT WITH FAVORITE SERVICES!!!

export const PastProject = ({ project }: PastProjectProps) => {
  return (
    <GeneralCard
      title={project.title}
      description={project.description}
    />
  )
}
