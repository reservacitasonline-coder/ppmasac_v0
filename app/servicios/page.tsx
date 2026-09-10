import type { Metadata } from "next";

import { ServiceGroups } from "@/components/sections/ServiceGroups";
import { ServicesCover } from "@/components/sections/ServicesCover";
import { JsonLd } from "@/components/seo/JsonLd";
import { seo, services } from "@/content/site";
import { breadcrumbSchema, servicesSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: seo.services.title,
  description: seo.services.description,
  keywords: services.groups.map((group) => group.title.replace(/\n/g, " ")),
  alternates: { canonical: "/servicios" },
  openGraph: {
    type: "website",
    url: "/servicios",
    title: seo.services.title,
    description: seo.services.description,
  },
};

export default function ServiciosPage() {
  return (
    <>
      <JsonLd
        graph={[
          servicesSchema(),
          breadcrumbSchema([{ name: services.eyebrow, path: "/servicios" }]),
        ]}
      />
      <ServicesCover />
      <main id="main">
        <ServiceGroups />
      </main>
    </>
  );
}
