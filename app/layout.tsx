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
  metadataBase: new URL(process.env.HTML_THIS_WEBSITE ?? "https://doug-promo.vercel.app/"),
  title: content.metaData.title,
  description: content.metaData.description,
  openGraph: {
    title: 'New Kent Handyman - Professional Handyman Services in New Kent',
    description: 'New Kent Handyman provides licensed and insured handyman services in New Kent and surrounding areas. From repairs to full renovations, trust New Kent Handyman to handle your home improvement needs efficiently.',
    url: process.env.HTML_THIS_WEBSITE ?? "https://doug-promo.vercel.app/",
    siteName: 'New Kent Handyman',
    images: `/opengraph-image.png`,
    locale: 'en_US',
    type: 'website',
  }
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
