"use server"

import classNames from 'classnames';
import Link from 'next/link';

// content
import content from '@/personal_content/header.json';
import personal_info from '@/personal_content/personal_info.json';

// styles
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.companyName}>{personal_info.company_name}</h1>
      <nav className={classNames(styles.nav, 'containerFullPage')}>
        {content.pages.map((page) => {
          return (
            <Link
              key={`header_nav_${page.id}`}
              href={page.url}
              title={page.title}
            >
              {page.label}
            </Link>
          );
        })}
      </nav>
    </header >
  )
}
