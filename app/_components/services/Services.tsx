

// layouts
import { PageSection } from '@/shared/_layouts/pageSection/PageSection';


// content
import content from '@/personal_content/services.json';

// styles
import { SectionHeader } from '../sectionHeader/SectionHeader';
import stylse from './Services.module.scss';

export const Services = () => {
  return (
    <PageSection>
      <SectionHeader
        title={content.title}
      />
    </PageSection>
  )
}
