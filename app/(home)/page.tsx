
// layouts
import { MainFullPage } from '@/shared/_layouts/mainFullPage/MainFullPage';

// components
import { Hero } from '../_components/hero/Hero';
import { FavoriteServices } from '../_components/favoriteServices/FavoriteServices';

// content
import content from '@/personal_content/homePage.json'

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
    </MainFullPage>
  );
}
