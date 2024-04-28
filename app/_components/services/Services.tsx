

// layouts
import { PageSection } from '@/shared/_layouts/pageSection/PageSection';


// content
import content from '@/personal_content/services.json';

// styles
import { SectionHeader } from '../../../shared/_components/sectionHeader/SectionHeader';
import stylse from './Services.module.scss';
import { ServiceType } from '@/personal_types/service';
import { Service } from '../service/Service';

export const Services = () => {
  return (
    <PageSection
      className={stylse.services}
    >
      <SectionHeader
        title={content.title}
      />
      <div className={stylse.servicesList}>
        {content.normal.map((service: ServiceType, index: number) => {
          return (
            <Service
              key={`services_service_${index}`}
              service={service}
            />
          )
        })}
      </div>
    </PageSection>
  )
}
