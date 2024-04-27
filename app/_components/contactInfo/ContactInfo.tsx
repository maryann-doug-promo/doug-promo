import classNames from 'classnames';

// shared utils
import { formatPhoneNumber } from '@/shared/lib/utils';

// layouts

// components

// content
import content from '@/personal_content/contactInfo.json';
import personalInfo from '@/personal_content/personal_info.json';

// styles
import styles from './ContactInfo.module.scss';

interface ContactInfoProps {
  className: string;
}

export const ContactInfo = ({ className }: ContactInfoProps) => {
  return (
    <div className={classNames(className, styles.contactInfo)}>
      <h3 className={styles.h3}>{content.twentFourHours}</h3>
      <div className={styles.instructions}>
        {content.instructions.map((instruction: string, index: number) => {
          return (
            <p key={`contact_contactInfo_instruction_${index}`}>{instruction}</p>
          )
        })}
      </div>
      <h3 className={styles.h3}>{`${personalInfo.company_name}, ${personalInfo.slogan}`}</h3>
      <div>
        <h3 className={styles.h3}>{`${personalInfo.name.first} ${personalInfo.name.last}`}</h3>
        <h3 className={styles.h3}>{personalInfo.email}</h3>
        <h3 className={styles.h3}>{formatPhoneNumber(personalInfo.phone_number)}</h3>
      </div>
      <div>
        <h5>{content.serviceAreas.title}</h5>
        {content.serviceAreas.areas.map((area: string, index) => {
          return (
            <p key={`contact_contactInfo_serviceArea_${index}`}>{area}</p>
          )
        })}
      </div>
    </div>
  )
}
