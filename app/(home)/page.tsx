
// types
import { FavoriteServiceType } from '@/personal_types/service';

// layouts
import { MainFullPage } from '@/shared/_layouts/mainFullPage/MainFullPage';

// components
import { Hero } from '../_components/hero/Hero';
import { FavoriteService } from '../_components/favoriteService/FavoriteService';
import { PastProject } from '../_components/PastProject/PastProject';
import { SectionHeader } from '../_components/sectionHeader/SectionHeader';

// shared components
import { FavoriteReviews } from '@/shared/_components/favoriteReviews/FavoriteReviews';

// content
import homePageContent from '@/personal_content/homePage.json';
import favoriteServicesContent from '@/personal_content/favoritServices.json';
import servicesContent from '@/personal_content/services.json';
import pastProjectsContent from '@/personal_content/pastProjects.json';

// styles
import styles from './page.module.scss';
import { CardsSection } from '../_layouts/cardSection/CardSection';
import { ProjectType } from '@/personal_types/project';

export default function HomePage() {
  return (
    <MainFullPage>
      <Hero
        classNameBackground={styles.heroBackground}
        content={homePageContent.hero}
      />
      <CardsSection
        title={favoriteServicesContent.title}
        cards={
          servicesContent.favorites.map((service: FavoriteServiceType, index: number) => {
            return (
              <FavoriteService
                key={`favoriteService_${index}`}
                service={service}
              />
            )
          })
        }
      />
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
