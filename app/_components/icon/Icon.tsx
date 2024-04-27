import Image, { StaticImageData } from "next/image";

// styles
import styles from './Icon.module.scss';

// icons
import starIcon from '@/public/assets/icons/star.svg';
import closeIcon from '@/public/assets/icons/close_x.svg';
import whiteCopyrightIcon from '@/public/assets/icons/white-copyright.svg';
import upArrowIcon from '@/public/assets/icons/upArrow.svg';
import downArrowIcon from '@/public/assets/icons/downArrow.svg';



const icons: Record<string, StaticImageData> = {
  start: starIcon,
  close: closeIcon,
  copyright: whiteCopyrightIcon,
  upArrow: upArrowIcon,
  downArrow: downArrowIcon
};

interface IconProps {
  id: string;
  alt: string;
  tooltip: string;
}

export const Icon = ({ id, alt, tooltip }: IconProps) => {

  return (
    <div title={tooltip}>
      <Image
        alt={alt}
        src={icons[id]}
        className={styles.icon}
      />
    </div>
  )
}
