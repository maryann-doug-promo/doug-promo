

// types
import { ProjectType } from '@/personal_types/project';

// layouts
import { CardsSection } from '@/app/_layouts/cardsSection/CardsSection';

// components
import { PastProject } from '../PastProject/PastProject';

// content
import content from '@/personal_content/pastProjects.json';

// style
import styles from './PastProjects.module.scss';

export const PastProjects = () => {
  return (
    <CardsSection
      title={content.title}
      cards={
        content.projects.map((project: ProjectType, index: number) => {
          return (
            <PastProject
              key={`pastProject_${index}`}
              project={project}
            />
          )
        })
      }
    />
  )
}
