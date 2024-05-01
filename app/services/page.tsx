
import { Metadata } from 'next';

// layouts
import { MainFullPage } from '@/shared/_layouts/mainFullPage/MainFullPage';

// components
import { Hero } from '@/shared/_components/hero/Hero';
import { Services } from '../_components/services/Services';

// content
import content from '@/personal_content/servicesPage.json'

// styles
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: content.metaData.title,
  description: content.metaData.description
};

export default function ServicesPage() {
  return (
    <MainFullPage>
      <Hero
        classNameBackground={styles.heroBackground}
        content={content.hero}
        classNameButton={styles.heroButton}
        classNameTitle={styles.heroTitle}
      />
      <Services />
    </MainFullPage>
  );
}
