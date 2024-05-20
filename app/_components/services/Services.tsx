
// types
import { ServiceType } from '@/personal_types/service';

// layouts
import { CardsSection } from '@/shared/_layouts/cardsSection/CardsSection';

// Components
import { Service } from '../service/Service';

// content
import content from '@/personal_content/services.json';

// styles
import styles from './Services.module.scss';

export const Services = () => {
  return (
    <CardsSection
      className={styles.services}
      title={content.title}
      cards={content.normal.map((service: ServiceType, index: number) => {
        return (
          <Service
            key={`services_service_${index}`}
            service={service}
          />
        )
      })}
    />
  )
}
