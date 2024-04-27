
// layouts

// components

// content
import content from '@/personal_content/contactInfo.json';

// styles
import styles from './ContactInfo.module.scss';

interface ContactInfoProps {
  className: string;
}

export const ContactInfo = ({ className }: ContactInfoProps) => {
  return (
    <div className={className}>ContactInfo</div>
  )
}
