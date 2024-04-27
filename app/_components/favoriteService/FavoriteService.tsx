"use server"

// type
import { FavoriteServiceType } from '@/personal_types/service';

// component
import { GeneralCard } from '../generalCard/GeneralCard';

// styles
import styles from './FavoriteService.module.scss';

interface FavoriteServiceProps {
  service: FavoriteServiceType
}

// TODO
// CAN PUT WITH PAST PROJECTS!!!

export const FavoriteService = ({ service }: FavoriteServiceProps) => {
  return (
    <GeneralCard
      title={service.title}
      description={service.description}
    />
  )
}
