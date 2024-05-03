
import Image from "next/image";

// layouts
import { SplitSection } from '@/shared/_layouts/splitSection/SplitSection';

// components

// image
import handyman from '@/public/assets/handyman.webp';

// content
import content from '@/personal_content/aboutHandyman.json';

// stylse
import styles from './AboutHandyman.module.scss';

export const AboutHandyman = () => {
  const thisComponent = "aboutHandyman";

  return (
    <SplitSection
      title={content.title}
      panelA={
        <>
          <h3 className={styles.infoHeader}>{content.info.title}</h3>
          {content.info.descriptions.map((description: string, index: number) => {
            return (
              <p key={`${thisComponent}_description_${index}`} className={styles.description}>{description}</p>
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
