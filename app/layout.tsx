import type { Metadata } from "next";
import { Header } from "./_components/header/Header";
import { Footer } from "./_components/footer/Footer";

// styles
import styles from './layout.module.scss';
// NOTE: the globals being imported here is going across all components. Even ones in the shared folder
import "./globals.scss";

export const metadata: Metadata = {
  title: "New Kent Handyman",
  description: "New Kent Handyman Doug Owen",
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
