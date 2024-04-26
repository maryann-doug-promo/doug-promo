// layouts
import { MainFullPage } from '@/shared/_layouts/mainFullPage/MainFullPage';

// components
import { Reviews } from '@/shared/_components/reviews/Reviews';

// styles
import styles from './page.module.scss';

export default function ReviewsPage() {
  return (
    <MainFullPage>
      <Reviews />
    </MainFullPage>
  );
}
