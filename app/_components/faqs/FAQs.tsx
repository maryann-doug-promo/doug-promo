
// layouts
import { PageSection } from '@/shared/_layouts/pageSection/PageSection';

// components
import { SectionHeader } from '../sectionHeader/SectionHeader';
import { FAQ } from '../faq/FAQ';

// content
import content from '@/personal_content/faq.json';

// types
interface FaqType {
  question: string;
  answer: string;
}

// styles
import styles from './FAQs.module.scss';

export const FAQs = () => {
  return (
    <PageSection>
      <SectionHeader
        title={content.title}
        subTitle={content.subTitle}
      />
      <div className={styles.faqs}>
        {content.faqs.map((faq: FaqType, index: number) => {
          return (
            <FAQ
              key={`faq_${index}`}
              question={faq.question}
              answer={faq.answer}
            />
          )
        })}
      </div>
    </PageSection>
  )
}
