
import type { Metadata } from "next";

// layouts
import { MainFullPage } from "../../shared/_layouts/mainFullPage/MainFullPage";

// components
import { PrivacyPolicy } from "@/shared/_components/privacyPolicy/PrivacyPolicy";

// content
import content from '@/personal_content/privacyPolicyPage.json';
import personal_info from '@/personal_content/personal_info.json';


export const metadata: Metadata = {
  title: content.metaData.title,
  description: content.metaData.description,
  alternates: {
    canonical: `${process.env.HTML_THIS_WEBSITE}/privacy-policy`
  }
};

export default function ContactPage() {
  return (
    <MainFullPage>
      <PrivacyPolicy
        businessName={personal_info.company_name_short}
        email={personal_info.email}
      />
    </MainFullPage>
  );
}