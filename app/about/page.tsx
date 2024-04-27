// layouts
import { MainFullPage } from '@/shared/_layouts/mainFullPage/MainFullPage';

// styles
import styles from './page.module.scss';
import { AboutUs } from '../_components/aboutUs/AboutUs';

export default function AboutPage() {
  return (
    <MainFullPage>
      <AboutUs />
    </MainFullPage>
  );
}
