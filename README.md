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
app/                  route segment: layout, page, globals.css, robots.ts, sitemap.ts
components/
  layout/             SiteHeader, SiteFooter
  sections/           one component per page section (Hero, Stats, Services, …)
  ui/                 Button, Container, Eyebrow, Heading, icons
content/              typed page content — the only place copy and photos live
lib/                  fonts, class-name helper, Unsplash URL builder
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

## Accessibility

- Skip link to the main content.
- Landmark elements and `aria-labelledby` on every section.
- Keyboard-visible focus rings and a `prefers-reduced-motion` opt-out for all
  animation and transitions.
