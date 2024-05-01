
import { Metadata } from 'next';

// layouts
import { MainFullPage } from '@/shared/_layouts/mainFullPage/MainFullPage';

// components
import { Contact } from '../_components/contact/Contact';

// content
import content from '@/personal_content/contactPage.json'

// styles
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: content.metaData.title,
  description: content.metaData.description
};

export default function ContactPage() {
  return (
    <MainFullPage>
      <Contact />
    </MainFullPage>
  );
}
