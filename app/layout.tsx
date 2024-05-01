import type { Metadata } from "next";
import { Header } from "./_components/header/Header";
import { Footer } from "./_components/footer/Footer";

// styles
import styles from './layout.module.scss';
// NOTE: the globals being imported here is going across all components. Even ones in the shared folder
import "./globals.scss";

// content
import content from '@/personal_content/rootLayout.json';

export const metadata: Metadata = {
  title: content.metaData.title,
  description: content.metaData.description
};

interface RootLayoutProps {
  children: React.ReactNode,
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
