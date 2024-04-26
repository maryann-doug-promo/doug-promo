"use client"

import { useState } from 'react';

// components
import { LeaveReviewForm } from '../leaveReviewForm/LeaveReviewForm';

import content from '../../content/leaveReview.json';

// styles
import styles from './LeaveReview.module.scss';
import { SplashScreen } from '@/shared/_layouts/splashScreen/SplashScreen';

export const LeaveReview = () => {

  const [leaveNewReview, setLeaveNewReview] = useState(false);

  return (
    <>
      {leaveNewReview ? (
        <SplashScreen
          handleClose={() => {
            setLeaveNewReview(false);
          }}
        >
          <LeaveReviewForm
            page="reviews"
            handleCloseForm={() => {
              setLeaveNewReview(false);
            }}
          />
        </SplashScreen>
      ) : (
        <button
          className={styles.writeReviewButton}
          onClick={() => {
            setLeaveNewReview(true)
          }}
        >
          {content.buttonText}
        </button>
      )}
    </>
  )
}
