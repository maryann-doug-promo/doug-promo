
// layouts
import { MainFullPage } from '@/shared/_layouts/mainFullPage/MainFullPage';

// components
import { Hero } from '../_components/hero/Hero';
import { SectionHeader } from '../_components/sectionHeader/SectionHeader';
import { FavoriteServices } from '../_components/favoriteServices/FavoriteServices';
import { PastProjects } from '../_components/pastProjects/PastProjects';

// shared components
import { FavoriteReviews } from '@/shared/_components/favoriteReviews/FavoriteReviews';

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
      />
      <FavoriteServices />
      <PastProjects />
      <FavoriteReviews
        sectionTitle={(
          <SectionHeader
            title={content.favoriteReviews.title}
          />
        )}
      />
    </MainFullPage>
  );
}
