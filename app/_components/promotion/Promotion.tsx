
import Image from "next/image";

// layouts

// components

// image
import handyman from '@/public/assets/handyman.webp';

// content
import content from '@/personal_content/promotion.json';

// stylse
import styles from './Promotion.module.scss';
import { SplitSection } from '@/shared/_layouts/splitSection/SplitSection';

export const Promotion = () => {
  return (
    <SplitSection
      title={content.title}
      panelA={
        <>
          <h3 className={styles.infoHeader}>{content.info.title}</h3>
          {content.info.descriptions.map((description: string, index: number) => {
            return (
              <p key={`promotion_description_${index}`} className={styles.description}>{description}</p>
            )
          })}
        </>
      }
      panelB={(
        <Image
          src={handyman}
          alt={content.image.alt}
          className={styles.image}
        />
      )}
      classNameSectionHeader={styles.sectionHeader}
      classNamePanelA={styles.panelA}
      classNamePanelB={styles.panelB}
    />
  )
}
