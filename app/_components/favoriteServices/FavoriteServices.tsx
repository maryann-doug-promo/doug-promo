
// types
import { FavoriteServiceType } from '@/personal_types/service';

// layouts
import { CardsSection } from '@/app/_layouts/cardSection/CardSection';
import { PageSection } from '@/shared/_layouts/pageSection/PageSection';

// components
import { FavoriteService } from '../favoriteService/FavoriteService';

// content
import content from '@/personal_content/favoritServices.json'
import services from '@/personal_content/services.json';

// styles
import styles from './FavoriteServices.module.scss';


export const FavoriteServices = () => {
  return (
    <PageSection>
      <CardsSection
        title={content.title}
        cards={
          services.favorites.map((service: FavoriteServiceType, index: number) => {
            return (
              <FavoriteService
                key={`favoriteService_${index}`}
                service={service}
              />
            )
          })
        }
      />
    </PageSection>
  )
}
