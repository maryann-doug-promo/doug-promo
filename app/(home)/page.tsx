
// layouts
import { MainFullPage } from '@/shared/_layouts/mainFullPage/MainFullPage';

// components
import { Hero } from '../_components/hero/Hero';
import { PastProject } from '../_components/PastProject/PastProject';
import { SectionHeader } from '../_components/sectionHeader/SectionHeader';

// shared components
import { FavoriteReviews } from '@/shared/_components/favoriteReviews/FavoriteReviews';

// content
import homePageContent from '@/personal_content/homePage.json';
import pastProjectsContent from '@/personal_content/pastProjects.json';

// styles
import styles from './page.module.scss';
import { CardsSection } from '../_layouts/cardSection/CardSection';
import { ProjectType } from '@/personal_types/project';
import { FavoriteServices } from '../_components/favoriteServices/FavoriteServices';

export default function HomePage() {
  return (
    <MainFullPage>
      <Hero
        classNameBackground={styles.heroBackground}
        content={homePageContent.hero}
      />
      <FavoriteServices />
      <CardsSection
        title={pastProjectsContent.title}
        cards={
          pastProjectsContent.projects.map((project: ProjectType, index: number) => {
            return (
              <PastProject
                key={`pastProject_${index}`}
                project={project}
              />
            )
          })
        }
      />
      <FavoriteReviews
        sectionTitle={(
          <SectionHeader
            title={homePageContent.favoriteReviews.title}
          />
        )}
      />
    </MainFullPage>
  );
}
