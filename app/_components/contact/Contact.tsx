

// layouts
import { PageSection } from '@/shared/_layouts/pageSection/PageSection';

// components
import { SectionHeader } from '../sectionHeader/SectionHeader';

// shared components
import { ContactForm } from '@/shared/_components/contactForm/ContactForm';

// content
import content from '@/personal_content/contact.json';

// styles
import styles from './Contact.module.scss';
import { ContactInfo } from '../contactInfo/ContactInfo';

export const Contact = () => {
  return (
    <PageSection>
      <SectionHeader title={content.title} />
      <div className={styles.contactOptions}>
        <div>
          <h3 className={styles.formTitle}>{content.formTitle}</h3>
          <ContactForm page="contact" />
        </div>
        <ContactInfo />
      </div>
    </PageSection>
  )
}
