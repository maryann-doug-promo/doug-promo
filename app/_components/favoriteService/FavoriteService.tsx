"use server"

// type
import { FavoriteServiceType } from '@/personal_types/service';

// layouts
import { Card } from '@/shared/_layouts/card/Card';

// styles
import styles from './FavoriteService.module.scss';

interface FavoriteServiceProps {
  service: FavoriteServiceType
}

export const FavoriteService = ({ service }: FavoriteServiceProps) => {
  return (
    <Card className={styles.favoriteService}>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.description}>{service.description}</p>
    </Card>
  )
}
