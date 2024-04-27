
import classNames from 'classnames';

// styles
import styles from './SectionHeader.module.scss';

interface SectionHeaderProps {
  title: string;
  classNameTitle?: string;
}

export const SectionHeader = ({ title, classNameTitle }: SectionHeaderProps) => {
  return (
    <div className={styles.sectionHeader}>
      <div className={styles.line}></div>
      <h2 className={classNames(styles.title, classNameTitle)}>{title}</h2>
      <div className={styles.line}></div>
    </div>
  )
}
