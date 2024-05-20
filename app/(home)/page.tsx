
import { Metadata } from 'next';

// layouts
import { MainFullPage } from '@/shared/_layouts/mainFullPage/MainFullPage';

// components
import { Hero } from '@/shared/_components/hero/Hero';
import { PastProjects } from '../_components/pastProjects/PastProjects';
import { SectionHeader } from '../../shared/_components/sectionHeader/SectionHeader';
import { Services } from '../_components/services/Services';

// shared components
import { Promotion } from '@/shared/_components/promotion/Promotion';
import { Reviews } from '@/shared/_components/reviews/Reviews';

// promo pic
import promoPic from '@/public/assets/intallFan.webp';

// content
import content from '@/personal_content/homePage.json';

// styles
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: content.metaData.title,
  description: content.metaData.description
};

export default function HomePage() {
  return (
    <MainFullPage>
      <Hero
        classNameBackground={styles.heroBackground}
        content={content.hero}
        classNameButton={styles.heroButton}
        classNameTitle={styles.heroTitle}
      />
      <Promotion
        page='home'
        content={content.promotion}
        promoPic={promoPic}
      />
      <Services
        className={styles.favoriteReviews}
        favorites={true}
      />
      <PastProjects />
      {/* The Reviews are for the favorite reviews */}
      <Reviews
        classNameBackground={styles.reviewsBackground}
        classNameCard={"cardBorders"}
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
