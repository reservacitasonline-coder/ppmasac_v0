import type { JsonLdGraph } from "@/lib/seo";

/**
 * Emits one `@graph` of JSON-LD. Everything passed in is first-party content
 * from `content/site.ts`, but `<` is still escaped: a literal `</script>`
 * anywhere in the copy would otherwise close the tag early.
 */
export function JsonLd({ graph }: { graph: JsonLdGraph[] }) {
  const payload = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  }).replace(/</g, "\\u003c");

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: payload }} />
  );
}
