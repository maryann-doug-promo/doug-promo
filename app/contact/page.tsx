// layouts
import { MainFullPage } from '@/shared/_layouts/mainFullPage/MainFullPage';

// styles
import styles from './page.module.scss';
import { Contact } from '@/shared/_components/contact/Contact';

export default function ContactPage() {
  return (
    <MainFullPage>
      <Contact />
    </MainFullPage>
  );
}
