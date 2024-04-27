

// styles
import styles from './SectionHeader.module.scss';

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className={styles.sectionHeader}>
      <div className={styles.line}></div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.line}></div>
    </div>
  )
}
