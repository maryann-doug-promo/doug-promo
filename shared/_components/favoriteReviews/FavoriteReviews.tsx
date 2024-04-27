"use server"

// DB functions
import { getFavoriteReviews } from '@/shared/lib/db/review';

// types
import { ReviewType } from '@/shared/types/review';

// layouts
import { PageSection } from '@/shared/_layouts/pageSection/PageSection';

// components
import { Review } from '../review/Review';

// content
import content from '../../content/favoriteReviews.json';

// styles
import styles from './FavoriteReviews.module.scss';

interface FavoriteReviewsProps {
  sectionTitle?: React.ReactNode;
}

export const FavoriteReviews = async ({ sectionTitle }: FavoriteReviewsProps) => {

  const favorites = await getFavoriteReviews();

  return (
    <PageSection>
      {sectionTitle ?? (
        <h2>{content.title}</h2>
      )}
      <div className={styles.reviews}>
        {favorites.map((review: ReviewType, index: number) => {
          return (
            <Review
              key={`favorite_review_${index}`}
              review={review}
              page='home'
              type='favorite'
            />
          );
        })}
      </div>
    </PageSection>
  )
}
