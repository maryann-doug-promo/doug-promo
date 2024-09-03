
import { Metadata } from 'next';

// layouts
import { MainFullPage } from '@/shared/_layouts/mainFullPage/MainFullPage';

// components
import { Hero } from '@/shared/_components/hero/Hero';
import { Services } from '../_components/services/Services';

// content
import content from '@/personal_content/servicesPage.json';
import servicesContent from '@/personal_content/services.json';

// styles
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: content.metaData.title,
  description: content.metaData.description,
  alternates: {
    canonical: `${process.env.HTML_THIS_WEBSITE}/services`
  }
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
      <Services
        services={servicesContent.all.services}
        title={servicesContent.all.title}
        type="all"
      />
    </MainFullPage>
  );
}
