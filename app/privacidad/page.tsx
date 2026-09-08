import type { Metadata } from "next";

import { PrivacyPolicy } from "@/components/sections/PrivacyPolicy";
import { privacy } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: privacy.lead,
  alternates: { canonical: "/privacidad" },
  openGraph: {
    type: "website",
    url: "/privacidad",
    title: "Política de privacidad",
    description: privacy.lead,
  },
};

export default function PrivacidadPage() {
  return (
    <main id="main">
      <PrivacyPolicy />
    </main>
  );
}
