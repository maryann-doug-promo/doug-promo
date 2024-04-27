

// layouts
import { CardsSection } from '@/app/_layouts/cardsSection/CardsSection';
import { PageSection } from '@/shared/_layouts/pageSection/PageSection';

// styles
import styles from './AboutUs.module.scss';

// content
import content from '@/personal_content/aboutUs.json'
import { GeneralCard } from '../generalCard/GeneralCard';

export const AboutUs = () => {
  return (
    <PageSection>
      <CardsSection
        title={content.title}
        classNameCards={styles.cards}
        classNameTitle={styles.title}
        cards={
          content.qualifications.map((qualification, index: number) => {
            return (
              <GeneralCard
                key={`aboutUs_qualification_${index}`}
                cardClassName={styles.qualification}
                title={qualification.title}
                description={qualification.description}
              />
            )
          })
        }
      />
    </PageSection>
  )
}
