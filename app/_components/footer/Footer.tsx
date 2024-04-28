"use server"

import classNames from 'classnames';

// utils
import { formatPhoneNumber } from '@/shared/lib/utils';

// content
import content from '@/personal_content/footer.json';
import personalInfo from '@/personal_content/personal_info.json';

// styles
import styles from './Footer.module.scss';
import { Icon } from '../icon/Icon';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={classNames(styles.innerFooter, 'containerFullPage')}>
        <h3>{`${personalInfo.company_name}, ${personalInfo.slogan}`}</h3>
        <h3>{personalInfo.address}</h3>
        <h4>{formatPhoneNumber(personalInfo.phone_number)}</h4>
        <div className={styles.copyright}>
          <span>{content.copyright.copyrightWord}</span>
          <span
            className={styles.copyrightIconContainer}
          >
            <Icon
              id='copyrightBlack'
              alt='Copyright Icon'
              tooltip='Copyright to Mary Ann Owen'
            />
          </span>
          <span>{content.copyright.afterSymbol}</span>
        </div>
      </div>
    </footer>
  )
}
