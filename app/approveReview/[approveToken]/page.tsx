"use server"

// layouts
import { MainFullPage } from "@/shared/_layouts/mainFullPage/MainFullPage";

// components
import { ApproveReview } from "@/shared/_components/approveReview/ApproveReview";

// DB functions
import { getReview } from "@/shared/lib/db/review";

import { ReviewType } from "@/shared/types/review";

// styles
import styles from './page.module.scss';


type ApproveReviewTokePageProps = {
  params: {
    approveToken: string;
  }
}

export default async function ApproveReviewTokePage({ params }: ApproveReviewTokePageProps) {

  let review: null | ReviewType = await getReview(params.approveToken);

  return (
    <MainFullPage>
      <ApproveReview
        review={review}
      />
    </MainFullPage>
  )
}
