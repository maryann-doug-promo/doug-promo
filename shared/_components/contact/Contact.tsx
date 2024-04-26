

// styles
import { PageSection } from '@/shared/_layouts/pageSection/PageSection';
import styles from './Contact.module.scss';
import { ContactForm } from '../contactForm/ContactForm';

export const Contact = () => {
  return (
    <PageSection>
      <h2>Book your Tailored Program Now!</h2>
      <ContactForm
        page='contact'
      />
    </PageSection>
  )
}
