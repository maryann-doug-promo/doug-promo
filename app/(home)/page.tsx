
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
import personalInfo from '@/personal_content/personal_info.json';
import servicesConent from '@/personal_content/services.json';

// Add the personal info for servicing areas
// This seems weird to not have in the JSON but we only
// want to put the servicing areas in the personal info JSON file
// So this is a way to handle that
content.hero.headlines = [
  ...content.hero.headlines,
  `Serving ${personalInfo.service_areas.join(", ")}`
];

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
        services={servicesConent.favorites.services}
        title={servicesConent.favorites.title}
        type='favorite'
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
