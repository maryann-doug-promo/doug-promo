

// layouts
import { CardsSection } from '@/shared/_layouts/cardsSection/CardsSection';

// components
import { GeneralCard } from '@/shared/_components/generalCard/GeneralCard';

// styles
import styles from './AboutUs.module.scss';

// content
import content from '@/personal_content/aboutUs.json'

export const AboutUs = () => {
  return (
    <CardsSection
      title={content.title}
      className={styles.background}
      classNameCards={styles.cards}
      classNameTitle={styles.title}
      cards={
        content.qualifications.map((qualification, index: number) => {
          return (
            <GeneralCard
              key={`aboutUs_qualification_${index}`}
              title={qualification.title}
              description={qualification.description}
              classNameDescription={styles.cardDescription}
            />
          )
        })
      }
    />
  )
}
