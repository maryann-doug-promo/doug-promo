"use server"

import classNames from 'classnames';

// layouts
import { PageSection } from '@/shared/_layouts/pageSection/PageSection';

// components
import { SectionHeader } from '@/app/_components/sectionHeader/SectionHeader';

// styles
import styles from './CardSection.module.scss';


interface CardsSectionProps {
  title: string;
  cards: React.ReactNode[];
  classNameCards?: string;
}

export const CardsSection = ({ title, cards, classNameCards }: CardsSectionProps) => {
  return (
    <PageSection>
      <SectionHeader
        title={title}
      />
      <div className={classNames(styles.cards, classNameCards)}>
        {cards}
      </div>
    </PageSection>
  )
}
