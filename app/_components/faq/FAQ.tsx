"use client"

import classNames from 'classnames';

import { useState } from 'react';
// styles
import styles from './FAQ.module.scss';
import { Icon } from '../icon/Icon';

interface FaqDropDownProps {
  question: string;
  answer: string;
}

export const FAQ = ({ question, answer }: FaqDropDownProps) => {

  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className={styles.dropdown}>
      <div
        className={styles.dropDownQuestion}
        onClick={() => {
          setShowAnswer(!showAnswer);
        }}
      >
        <span>{question}</span>
        <div className={styles.arrowContainer}>

          {showAnswer ? (
            <Icon
              id="upArrow"
              alt="Close drop down"
              tooltip="Close drop down"
            />
          ) : (
            <Icon
              id="downArrow"
              alt="Open drop down"
              tooltip="Open drop down"
            />
          )}
        </div>
      </div>
      <div
        className={
          classNames(
            styles.dropDownAnswer,
            !showAnswer ? styles.hideAnswer : undefined
          )
        }
      >
        <p>{answer}</p>
      </div>
    </div>
  )
}
