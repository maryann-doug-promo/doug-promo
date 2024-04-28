// layouts
import { MainFullPage } from '@/shared/_layouts/mainFullPage/MainFullPage';

// components
import { Hero } from '../_components/hero/Hero';
import { Reviews } from '@/shared/_components/reviews/Reviews';

// content
import content from '@/personal_content/reviewsPage.json';

// styles
import styles from './page.module.scss';
import { LeaveReview } from '@/shared/_components/leaveReview/LeaveReview';

export default function ReviewsPage() {
  return (
    <MainFullPage>
      <Hero
        classNameBackground={styles.heroBackground}
        content={content.hero}
        callToAction={
          <LeaveReview
            classNameButton={styles.heroLeaveReviewButton}
            buttonText="Leave a Review"
          />
        }
      />
      <Reviews
        isFavorites={false}
        sectionTitle={null}
        classNameCard={"reviewCardBorders"}
      />
    </MainFullPage>
  );
}
