"use server"

// layouts
import { PageSection } from '@/shared/_layouts/pageSection/PageSection';

// components
import { SectionHeader } from '@/app/_components/sectionHeader/SectionHeader';

// styles
import styles from './CardSection.module.scss';


interface CardsSectionProps {
  title: string;
  cards: React.ReactNode[];
}

export const CardsSection = ({ title, cards }: CardsSectionProps) => {
  return (
    <PageSection>
      <SectionHeader
        title={title}
      />
      <div className={styles.cards}>
        {cards}
      </div>
    </PageSection>
  )
}
