# Landmark

Marketing site for Landmark, a commercial construction studio. Built with the Next.js
App Router, TypeScript and CSS Modules. The whole page is statically prerendered and
ships zero client-side JavaScript of its own — the FAQ accordion uses native
`<details>` elements, so every component is a Server Component.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Environment

The contact form emails each enquiry through [Resend](https://resend.com), so a
`.env.local` is needed for it to deliver:

```bash
RESEND_API_KEY=re_...
# Optional overrides; the defaults are in lib/mail.ts.
CONTACT_TO_EMAIL="atencionalcliente@ppmasac.com"
CONTACT_FROM_EMAIL="PPMA SAC <formulario@send.ppmasac.com>"
```

`CONTACT_FROM_EMAIL` has to sit on a domain verified in the Resend account —
while nothing is verified there, the send falls back to Resend's own
`onboarding@resend.dev` sender, which only reaches the account owner.

Verify the `send.ppmasac.com` **subdomain**, not the root domain: the corporate
mailbox runs on Purelymail, whose MX and SPF records live on the root, and
Resend needs its own MX and SPF there too. Two MX records pointing at different
providers would break incoming mail, so keeping the sending domain on a
subdomain leaves the mailbox untouched. DNS is on Cloudflare — every record
Resend asks for has to be set to "DNS only", never proxied.

## Scripts

| Script                 | Purpose                         |
| ---------------------- | ------------------------------- |
| `npm run dev`          | Development server              |
| `npm run build`        | Production build                |
| `npm run start`        | Serve the production build      |
| `npm run lint`         | ESLint (`eslint-config-next`)   |
| `npm run typecheck`    | `tsc --noEmit`                  |
| `npm run format`       | Prettier write                  |
| `npm run format:check` | Prettier check, suitable for CI |

## Project structure

```
app/                  routes plus the metadata files: robots.ts, sitemap.ts,
                      manifest.ts, opengraph-image.jpg, twitter-image.jpg
components/
  layout/             SiteHeader, SiteFooter
  sections/           one component per page section (Hero, Stats, Services, …)
  seo/                JsonLd, the structured-data script tag
  ui/                 Button, Container, Eyebrow, Heading, icons
content/              typed page content — the only place copy and photos live
lib/                  fonts, class-name helper, Unsplash URL builder, enquiry
                      email, structured-data builders (seo.ts)
  actions/            server actions (contact form submission)
styles/               shared type styles pulled in with CSS Modules `composes`
```

## Editing content

All copy, statistics, services, FAQ entries and image references live in
[`content/site.ts`](content/site.ts) and are typed by
[`content/types.ts`](content/types.ts). Sections render whatever that file exports, so
copy changes never require touching a component.

Headings are arrays of strings — one entry per rendered line — so the poster-style
line breaks stay exactly where the design puts them:

```ts
heading: ["We build foundations for", "future businesses"],
```

## Styling

Design tokens (palette, type stacks, spacing, easing) are CSS custom properties
declared in [`app/globals.css`](app/globals.css). Everything else is a `*.module.css`
file next to its component. Repeated type treatments live in
`styles/typography.module.css` and are shared through `composes`.

Fonts are self-hosted through `next/font` (Anton, Barlow Condensed, Inter) and exposed
as the `--font-display`, `--font-cond` and `--font-body` stacks.

## Images

Photography is loaded from Unsplash through `next/image`. The host is allow-listed in
[`next.config.ts`](next.config.ts); URLs are built by `lib/unsplash.ts`. To move to
self-hosted assets, drop the files in `public/` and point `content/site.ts` at them.

## SEO

Search-facing copy is separate from design copy: titles and descriptions live in
the `seo` export of [`content/site.ts`](content/site.ts), written short enough
(~60 and ~160 characters) that Google shows them whole instead of truncating
them. Section headings stay free to be poster-scale.

- **Metadata** is declared once in [`app/layout.tsx`](app/layout.tsx) and
  narrowed per route. Every page sets its own `alternates.canonical`.
- **Social cards** come from `app/opengraph-image.jpg` and `app/twitter-image.jpg`,
  with their alt text in the sibling `.alt.txt` files.
- **Structured data** is built in [`lib/seo.ts`](lib/seo.ts) and rendered by
  `components/seo/JsonLd.tsx`. Nodes are joined through `@id` so crawlers resolve
  one shared `Organization` across routes rather than one per page. The company
  is typed as `Organization` and not `GeneralContractor` on purpose: the
  local-business types want a street address to earn map results, and the
  registered address is still pending from the client.
- **`robots.txt`, `sitemap.xml` and the manifest** are generated by
  `app/robots.ts`, `app/sitemap.ts` and `app/manifest.ts`.

To claim the site in Google Search Console, put the HTML-tag token in the
environment rather than in the repository:

```bash
GOOGLE_SITE_VERIFICATION=abc123…
```

## Accessibility

- Skip link to the main content.
- Landmark elements and `aria-labelledby` on every section.
- Keyboard-visible focus rings and a `prefers-reduced-motion` opt-out for all
  animation and transitions.
