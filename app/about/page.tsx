
import { Metadata } from 'next';

// layouts
import { MainFullPage } from '@/shared/_layouts/mainFullPage/MainFullPage';

// components
import { AboutHandyman } from '../_components/aboutHandyman/AboutHandyman';
import { AboutUs } from '../_components/aboutUs/AboutUs';
import { FAQs } from '../_components/faqs/FAQs';
import { Hero } from '@/shared/_components/hero/Hero';
import { Services } from '../_components/services/Services';

// content
import content from '@/personal_content/aboutPage.json';
import servicesContent from '@/personal_content/services.json';

// styles
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: content.metaData.title,
  description: content.metaData.description
};

export default function AboutPage() {
  return (
    <MainFullPage>
      <Hero
        classNameBackground={styles.heroBackground}
        content={content.hero}
        classNameButton={styles.heroButton}
        classNameTitle={styles.heroTitle}
      />
      <AboutHandyman />
      <AboutUs />
      <FAQs />
      <Services
        className={styles.servicesNotProvided}
        services={servicesContent.not_provided.services}
        title={servicesContent.not_provided.title}
        type="not_provided"
      />
    </MainFullPage>
  );
}
