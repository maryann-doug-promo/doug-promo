
// types
import { FavoriteServiceType } from '@/personal_types/service';

// layouts
import { PageSection } from '@/shared/_layouts/pageSection/PageSection';

// content
import content from '@/personal_content/favoritServices.json'
import services from '@/personal_content/services.json';

// styles
import styles from './FavoriteServices.module.scss';
import { FavoriteService } from '../favoriteService/FavoriteService';
import { SectionHeader } from '../sectionHeader/SectionHeader';


export const FavoriteServices = () => {
  return (
    <PageSection>
      <SectionHeader
        title={content.title}
      />
      <div className={styles.favorites}>
        {services.favorites.map((service: FavoriteServiceType, index: number) => {
          return (
            <FavoriteService
              key={`favoriteService_${index}`}
              service={service}
            />
          )
        })}
      </div>
    </PageSection>
  )
}
