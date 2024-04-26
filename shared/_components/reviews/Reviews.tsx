
import { unstable_noStore } from 'next/cache';

// styles
import { PageSection } from '@/shared/_layouts/pageSection/PageSection';
import styles from './Reviews.module.scss';
import { getReviews } from '@/shared/lib/db/review';
import { ReviewType } from '@/shared/types/review';
import { Review } from '../review/Review';
import { LeaveReview } from '../leaveReview/LeaveReview';

export const Reviews = async () => {
  // TODO once you get caching right you implement it
  // TODO for now not enough time
  unstable_noStore();

  const reviews = await getReviews();

  return (
    <PageSection>
      <h1>Reviews</h1>
      <LeaveReview />
      <div className={styles.reviews}>
        {reviews.map((review: ReviewType, index: number) => {
          return (
            <Review
              key={`reviews_page_review_${index}`}
              review={review}
              page='reviews'
              type={review.favorite ? 'favorite' : 'normal'}
            />
          )
        })}
      </div>
    </PageSection>
  )
}
