
// layouts
import { PageSection } from "@/shared/_layouts/pageSection/PageSection";

// components
import { LinkButton } from "@/shared/_components/linkButton/LinkButton";

// styles
import styles from './Hero.module.scss';


interface HeroProps {
  classNameBackground: string;
  content: {
    title: string;
    headlines: string[];
    subheadline?: string;
    callToActionButton: {
      href: string;
      label: string;
    };
    photoCredit?: string;
  }
}

export const Hero = ({ classNameBackground, content }: HeroProps) => {

  const photoCredit: null | string = content.photoCredit ?? null;

  return (
    <PageSection background={classNameBackground} innerStyle={styles.innerStyle}>
      <div className={styles.content}>
        <h1 className={styles.title}>{content.title}</h1>
        <div className={styles.headlines}>
          {content.headlines.map((headline: string, index: number) => {
            return (
              <h2 key={`hero_headline_${index}`} className={styles.headline}>
                {headline}
              </h2>
            );
          })}
        </div>
        {content.subheadline && (
          <h3 className={styles.subheadline}>
            {content.subheadline}
          </h3>
        )}
        <LinkButton
          className={styles.callToActionButton}
          content={content.callToActionButton}
        />
      </div>
      {content.photoCredit && (
        <p className={styles.photoCredit}>{content.photoCredit}</p>
      )}
    </PageSection>
  )
}
