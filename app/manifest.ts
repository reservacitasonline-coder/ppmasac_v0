import type { MetadataRoute } from "next";

import { seo, site } from "@/content/site";

/**
 * Web app manifest. It is not a ranking factor, but it is what Android uses
 * for the name, icon and colours when the site is added to a home screen.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.tagline}`,
    short_name: site.name,
    description: seo.description,
    lang: "es-PE",
    start_url: "/",
    display: "standalone",
    background_color: "#b6c3dd",
    theme_color: "#2f426b",
    icons: [
      {
        src: "/logos_v2/favicon/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logos_v2/favicon/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/logos_v2/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
