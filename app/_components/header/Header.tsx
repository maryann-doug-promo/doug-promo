"use server"

// components
import { NavPages } from '../../../shared/_components/navPages/NavPages';

// content
import content from '@/personal_content/header.json';
import personal_info from '@/personal_content/personal_info.json';

// styles
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.companyName}>{personal_info.company_name_short}</h1>
      <NavPages
        pages={content.pages}
        placeCalling='header'
      />
    </header >
  )
}
