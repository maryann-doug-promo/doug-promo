
import classNames from 'classnames';

// components
import { Icon } from '../icon/Icon';

// content
import content from '@/personal_content/copyright.json';

// styles
import styles from './Copyright.module.scss';

interface CopyrightProps {
  className: string;
}

export const Copyright = ({ className }: CopyrightProps) => {
  return (
    <div className={classNames(styles.copyright, className)}>
      <span>{content.copyright.copyrightWord}</span>
      <span className={styles.copyrightIconContainer}>
        <Icon
          id='copyrightBlack'
          alt='Copyright Icon'
          tooltip='Copyright to Mary Ann Owen'
        />
      </span>
      <span>{content.copyright.afterSymbol}</span>
    </div>
  )
}
