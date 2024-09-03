

// layouts
import { PageSection } from '@/shared/_layouts/pageSection/PageSection';

// components
import { SectionHeader } from '../../../shared/_components/sectionHeader/SectionHeader';

// shared components
import { ContactForm } from "@/shared/_components/contactForm/ContactForm";

// content
import content from '@/personal_content/contact.json';

// styles
import styles from './Contact.module.scss';
import { ContactInfo } from '../contactInfo/ContactInfo';
import { GoogleRecaptchaWrapper } from '@/shared/_components/googleRecaptchaWrapper/GoogleRecaptchaWrapper';

export const Contact = () => {
  return (
    <PageSection>
      <SectionHeader title={content.title} />
      <div className={styles.contactOptions}>
        <div className={styles.contactFormSection}>
          <h3 className={styles.formTitle}>{content.formTitle}</h3>
          <GoogleRecaptchaWrapper>
            <ContactForm
              classNameFields={styles.formFields}
              classNameSubmitButton={styles.formSubmitButton}
              page="contact"
            />
          </GoogleRecaptchaWrapper>
        </div>
        <ContactInfo className={styles.contactInfo} />
      </div>
    </PageSection>
  )
}
