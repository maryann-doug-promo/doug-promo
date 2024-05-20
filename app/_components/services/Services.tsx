import classNames from 'classnames';

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

interface ServicesProps {
  className?: string;
  type: string;
  title: string;
  services: ServiceType[]
}

export const Services = ({ className, services, title, type }: ServicesProps) => {

  return (
    <CardsSection
      className={classNames(styles.services, className)}
      title={title}
      cards={services.map((service: ServiceType, index: number) => {
        return (
          <Service
            key={`${type}_services_service_${index}`}
            service={service}
          />
        )
      })}
    />
  )
}
