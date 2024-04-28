"use server"

import classNames from 'classnames';

// utils
import { formatPhoneNumber } from '@/shared/lib/utils';

// components
import { Copyright } from '../copyright/Copyright';

// content
import content from '@/personal_content/footer.json';
import personalInfo from '@/personal_content/personal_info.json';

// styles
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={classNames(styles.innerFooter, 'containerFullPage')}>
        <h3 className={styles.sloganAddress}>{`${personalInfo.company_name}, ${personalInfo.slogan}`}</h3>
        <h3 className={styles.sloganAddress}>{personalInfo.address}</h3>
        <h4 className={styles.phoneNumber}>{formatPhoneNumber(personalInfo.phone_number)}</h4>
        <Copyright
          className={styles.copyright}
        />
      </div>
    </footer>
  )
}
