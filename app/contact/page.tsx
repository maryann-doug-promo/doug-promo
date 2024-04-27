// layouts
import { MainFullPage } from '@/shared/_layouts/mainFullPage/MainFullPage';

// components
import { Contact } from '../_components/contact/Contact';

// styles
import styles from './page.module.scss';

export default function ContactPage() {
  return (
    <MainFullPage>
      <Contact />
    </MainFullPage>
  );
}
