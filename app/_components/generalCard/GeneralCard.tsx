"use server"

// layouts
import { Card } from '@/shared/_layouts/card/Card';

// styles
import styles from './GeneralCard.module.scss';

interface GeneralCardProps {
  title: string;
  description: string;
}

export const GeneralCard = ({ title, description }: GeneralCardProps) => {
  return (
    <Card className={styles.generalCard}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </Card>
  )
}
