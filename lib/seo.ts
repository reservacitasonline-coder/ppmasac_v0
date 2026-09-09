import { about, footer, seo, services, site } from "@/content/site";

/**
 * Builders for the JSON-LD that search engines read to understand who publishes
 * the site and what it sells. Rendered by `components/seo/JsonLd.tsx`.
 *
 * The graph is stitched together with `@id` references so Google resolves one
 * organisation shared by every page, instead of a separate company per route.
 */

const ORGANISATION_ID = `${site.url}/#organizacion`;
const WEBSITE_ID = `${site.url}/#website`;

/** Absolute URLs, since crawlers read this markup outside any page context. */
function absolute(path: string) {
  return new URL(path, site.url).href;
}

/**
 * Typed loosely on purpose: schema.org allows far more shapes than a hand
 * written interface would capture, and the output is only ever serialised.
 */
export type JsonLdGraph = Record<string, unknown>;

/**
 * The company itself.
 *
 * Deliberately `Organization` and not `GeneralContractor`: the local-business
 * types expect a street address to earn map and local-pack results, and the
 * registered address is still pending from the client (see `privacy` in
 * `content/site.ts`). Claiming one we do not have would be invalid markup.
 */
export function organisationSchema(): JsonLdGraph {
  return {
    "@type": "Organization",
    "@id": ORGANISATION_ID,
    name: site.name,
    legalName: seo.legalName,
    alternateName: footer.brandName,
    url: site.url,
    description: seo.description,
    slogan: site.tagline,
    foundingDate: seo.foundedIn,
    email: footer.contact.email,
    telephone: `+${site.whatsapp.number}`,
    taxID: seo.ruc,
    identifier: {
      "@type": "PropertyValue",
      name: "RUC",
      value: seo.ruc,
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "PE",
    },
    areaServed: {
      "@type": "Country",
      name: "Perú",
    },
    knowsAbout: seo.expertise,
    knowsLanguage: "es-PE",
    logo: {
      "@type": "ImageObject",
      url: absolute(site.logo.src),
      width: site.logo.width,
      height: site.logo.height,
    },
    image: absolute("/opengraph-image.jpg"),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "atención al cliente",
      email: footer.contact.email,
      telephone: footer.contact.phone.label,
      areaServed: "PE",
      availableLanguage: ["es"],
    },
    // Every service line, so the catalogue is attached to the company and not
    // only to the page that lists it.
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: services.eyebrow,
      itemListElement: services.groups.map((group) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: group.title,
          description: group.summary,
          url: absolute(`/servicios#${group.slug}`),
        },
      })),
    },
  };
}

/** The site as a publication, tying every page back to the organisation. */
export function websiteSchema(): JsonLdGraph {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.name,
    description: seo.description,
    inLanguage: "es-PE",
    publisher: { "@id": ORGANISATION_ID },
  };
}

/** The home page, including the "about" copy as its main subject. */
export function homePageSchema(): JsonLdGraph {
  return {
    "@type": "WebPage",
    "@id": `${site.url}/#webpage`,
    url: site.url,
    name: seo.title,
    description: seo.description,
    inLanguage: "es-PE",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANISATION_ID },
    primaryImageOfPage: absolute("/opengraph-image.jpg"),
    significantLink: absolute("/servicios"),
  };
}

/** One `Service` per line of business, provided by the organisation. */
export function servicesSchema(): JsonLdGraph {
  return {
    "@type": "ItemList",
    "@id": `${absolute("/servicios")}#lineas`,
    name: services.page.indexTitle,
    description: seo.services.description,
    numberOfItems: services.groups.length,
    itemListElement: services.groups.map((group, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: group.title,
        description: group.summary,
        url: absolute(`/servicios#${group.slug}`),
        serviceType: group.title,
        provider: { "@id": ORGANISATION_ID },
        areaServed: { "@type": "Country", name: "Perú" },
        // The bullet list of each group, so the detail is machine readable.
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: group.title,
          itemListElement: group.items.map((item) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: item },
          })),
        },
      },
    })),
  };
}

/**
 * Trail shown under a search result. The home page is left out because a
 * single-item breadcrumb tells a crawler nothing it does not already know.
 */
export function breadcrumbSchema(trail: { name: string; path: string }[]): JsonLdGraph {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Inicio", path: "/" }, ...trail].map((step, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: step.name,
      item: absolute(step.path),
    })),
  };
}

/** Mission, vision and values read as an "about" page for the home route. */
export function aboutSchema(): JsonLdGraph {
  return {
    "@type": "AboutPage",
    "@id": `${site.url}/#nosotros`,
    name: about.subtitle,
    description: about.lead,
    inLanguage: "es-PE",
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": ORGANISATION_ID },
  };
}
