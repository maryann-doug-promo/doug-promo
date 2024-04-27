// layouts
import { MainFullPage } from '@/shared/_layouts/mainFullPage/MainFullPage';

// components
import { AboutUs } from '../_components/aboutUs/AboutUs';
import { FAQs } from '../_components/faqs/FAQs';

// styles
import styles from './page.module.scss';

export default function AboutPage() {
  return (
    <MainFullPage>
      <AboutUs />
      <FAQs />
    </MainFullPage>
  );
}
