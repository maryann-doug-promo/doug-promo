// layouts
import { MainFullPage } from '@/shared/_layouts/mainFullPage/MainFullPage';

// components
import { Hero } from '@/shared/_components/hero/Hero';

// content
import content from '@/personal_content/servicesPage.json'

// styles
import styles from './page.module.scss';
import { Services } from '../_components/services/Services';

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
