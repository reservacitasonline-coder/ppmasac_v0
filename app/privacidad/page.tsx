import type { Metadata } from "next";

import { PrivacyPolicy } from "@/components/sections/PrivacyPolicy";
import { JsonLd } from "@/components/seo/JsonLd";
import { privacy } from "@/content/site";
import { breadcrumbSchema } from "@/lib/seo";

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
      <JsonLd
        graph={[
          breadcrumbSchema([{ name: "Política de privacidad", path: "/privacidad" }]),
        ]}
      />
      <PrivacyPolicy />
    </main>
  );
}
