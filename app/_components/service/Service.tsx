
// types
import { ServiceType } from '@/personal_types/service';

// components
import { GeneralCard } from '@/shared/_components/generalCard/GeneralCard';

// styles
import styles from './Service.module.scss';

// TODO THIS IS THE SAME AS FAVORITE SERVICES!!
// TODO its kept this way for readibility OR if you need them different later

interface ServiceProps {
  service: ServiceType
}

export const Service = ({ service }: ServiceProps) => {
  return (
    <GeneralCard
      title={service.title}
      description={service.description}
    />
  )
}
