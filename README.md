# jomurgel.com

My personal site — portfolio, writing, photography, and a résumé. Built with
[Astro](https://astro.build) on top of [Acorn](https://github.com/jomurgel/acorn.css),
my classless CSS baseline. No UI framework, no client-side router; just static
HTML with a sprinkle of vanilla JS for the nav, theme toggle, and the little
face in the footer.

The design language is print-shop: CMYK plates, registration marks, and a
misregistered-ink offset on headline accents.

## Stack

- **Astro 5** — static output, content collections, zero JS by default
- **Acorn CSS 3** — classless base styling; everything custom lives in `src/styles/site.css`
- **lucide-static** — raw SVG icons, imported at build time
- **@astrojs/sitemap** — sitemap generation (hidden pages filtered out)
- **Node 22**

## Getting started

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output to dist/
npm run preview    # serve the built dist/ locally
```

## Structure

```
src/
  components/      Astro components (PageHero, PostList, RelatedPosts, etc.)
  content/
    words/         writing + photo posts (markdown)
    work/          case studies (markdown)
  data/            codex + experience (TS data, not collections)
  layouts/         Base.astro — the shared shell (head, header, footer)
  pages/           routes; [slug].astro for dynamic post/work pages
  styles/          site.css — the entire custom design layer
brand/
  resume.md        source for the /resume page (the only committed brand file)
public/            static assets served as-is (images, og.png, robots.txt)
```

## Writing content

Posts and case studies are markdown files with frontmatter. The schema is in
`src/content.config.ts`.

**Words & Photos** — `src/content/words/*.md`:

```yaml
---
title: The Shift
description: A short summary for the index + meta tags.
date: 2025-03-03
tags: [reflections]        # 'shorty' tag gives the "Shorty:" prefix
type: writing             # or 'photo' (photo posts force dark theme)
coverImage: /no-ai/cover.jpg   # optional — promotes to an image-forward layout
coverAlt: Alt text for the cover.
draft: false
---
```

**Work** — `src/content/work/*.md`:

```yaml
---
title: Acorn
summary: One-line description for the card + hero.
client: Project Acorn
role: Designer + engineer (solo)
year: 2024 – present
link: https://github.com/jomurgel/acorn.css
linkLabel: Acorn docs
stack: [CSS, esbuild, npm]
ink: c                    # hero/card plate: c | m | y
span: 2                   # Work-grid columns to span (1 = 33%, 2 = 66%)
order: 1                  # sort order on the Work index
draft: false
---
```

Set `draft: true` to keep a file out of the build.

## The résumé

`/resume` renders `brand/resume.md` — a single source of truth. The "Download
PDF" button is just `window.print()` against a print stylesheet (`@media print`
in `site.css`), so the PDF stays in sync with the page. The rest of `brand/`
(`linkedin.md`, `story.md`) is gitignored and stays local.

## Hidden pages

`/resume` and `/style-guide` are `noindex, nofollow`, excluded from the sitemap,
and linked from nowhere. `/style-guide` is an internal reference showing every
base element and custom component in one place.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`: it builds the site
and rsyncs `dist/` to the droplet over SSH. It needs four repo secrets:

| Secret | What it is |
| --- | --- |
| `SSH_KEY` | private key authorized on the droplet |
| `HOST` | droplet hostname or IP |
| `USERNAME` | SSH user |
| `TARGET_DIRECTORY` | web root the site is served from |

The droplet's nginx serves the static files and maps the 404:
`error_page 404 /404.html;`.
