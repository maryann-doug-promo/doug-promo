
// layouts
import { MainFullPage } from '@/shared/_layouts/mainFullPage/MainFullPage';

// components
import { Hero } from '@/shared/_components/hero/Hero';
import { SectionHeader } from '../../shared/_components/sectionHeader/SectionHeader';
import { FavoriteServices } from '../_components/favoriteServices/FavoriteServices';
import { PastProjects } from '../_components/pastProjects/PastProjects';

// shared components
import { Reviews } from '@/shared/_components/reviews/Reviews';

// content
import content from '@/personal_content/homePage.json';

// styles
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <MainFullPage>
      <Hero
        classNameBackground={styles.heroBackground}
        content={content.hero}
        classNameButton={styles.heroButton}
        classNameTitle={styles.heroTitle}
      />
      <FavoriteServices />
      <PastProjects />
      {/* The Reviews are for the favorite reviews */}
      <Reviews
        classNameCard={"reviewCardBorders"}
        isFavorites={true}
        sectionTitle={(
          <SectionHeader
            title={content.favoriteReviews.title}
          />
        )}
      />
    </MainFullPage>
  );
}
