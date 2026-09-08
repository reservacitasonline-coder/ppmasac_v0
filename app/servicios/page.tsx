import type { Metadata } from "next";

import { ServiceGroups } from "@/components/sections/ServiceGroups";
import { ServicesCover } from "@/components/sections/ServicesCover";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "Servicios",
  description: services.page.lead,
  alternates: { canonical: "/servicios" },
  openGraph: {
    type: "website",
    url: "/servicios",
    title: "Servicios",
    description: services.page.lead,
  },
};

export default function ServiciosPage() {
  return (
    <>
      <ServicesCover />
      <main id="main">
        <ServiceGroups />
      </main>
    </>
  );
}
