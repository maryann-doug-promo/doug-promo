
// layouts
import { PageSection } from '@/shared/_layouts/pageSection/PageSection';

// components
import { SectionHeader } from '../sectionHeader/SectionHeader';

// content
import content from '@/personal_content/faq.json';

// styles
import styles from './FAQ.module.scss';

export const FAQ = () => {
  return (
    <PageSection>
      <SectionHeader
        title={content.title}
        subTitle={content.subTitle}
      />
    </PageSection>
  )
}
