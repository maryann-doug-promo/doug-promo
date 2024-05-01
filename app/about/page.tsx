
import { Metadata } from 'next';

// layouts
import { MainFullPage } from '@/shared/_layouts/mainFullPage/MainFullPage';

// components
import { AboutUs } from '../_components/aboutUs/AboutUs';
import { FAQs } from '../_components/faqs/FAQs';

// content
import content from '@/personal_content/aboutPage.json';

// styles
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: content.metaData.title,
  description: content.metaData.description
};

export default function AboutPage() {
  return (
    <MainFullPage>
      <AboutUs />
      <FAQs />
    </MainFullPage>
  );
}
