
import Image from "next/image";

// layouts
import { SplitSection } from '@/shared/_layouts/splitSection/SplitSection';
import { UnorderedList } from "@/shared/_layouts/unorderedList/UnorderedList";

// components

// image
import promoPic from '@/public/assets/intallFan.webp';

// content
import content from '@/personal_content/promotion.json';

// stylse
import styles from './Promotion.module.scss';

// local types
interface BenefitType {
  title: string;
  description: string;
}

export const Promotion = () => {
  const thisComponent = "promotion";
  return (
    <SplitSection
      title={content.title}
      panelA={
        <>
          <h3 className={styles.infoHeader}>{content.info.title}</h3>
          <UnorderedList
            page="home"
            category="promotion"
            items={
              content.info.benefits.map((benefit: BenefitType, index: number) => {
                return (
                  <div
                    key={`${thisComponent}_description_${index}`}
                    className={styles.benefit}
                  >
                    <span className={styles.benefitTitle}>{`${benefit.title}:`}</span>
                    <span className={styles.benefitDescription}>{benefit.description}</span>
                  </div>
                )
              })
            }
          />
        </>
      }
      panelB={(
        <Image
          src={promoPic}
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
