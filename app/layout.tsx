import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { seo, site } from "@/content/site";
import { fontVariables } from "@/lib/fonts";
import { organisationSchema, websiteSchema } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: seo.title,
    template: `%s · ${site.name}`,
  },
  description: seo.description,
  applicationName: site.name,
  keywords: [...seo.keywords],
  authors: [{ name: seo.legalName, url: site.url }],
  creator: seo.legalName,
  publisher: seo.legalName,
  category: "construcción",
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: seo.title,
    description: seo.description,
    locale: "es_PE",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
    // Lets Google show full-length text snippets and large image previews
    // instead of the conservative defaults it falls back to.
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  // Search Console ownership token, set per environment so it never lands in
  // the repository. Absent in development, which is fine.
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#1f4796",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es-PE" className={fontVariables}>
      <body id="top">
        <JsonLd graph={[organisationSchema(), websiteSchema()]} />
        <a className="skipLink" href="#main">
          Saltar al contenido
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppButton />
        <ScrollReveal />
      </body>
    </html>
  );
}
