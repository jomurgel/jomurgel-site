import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: 'https://jomurgel.com',
  // Temporary: the standalone Chroma set is folded into Leo for now. Remove once
  // the leo/sylvia photo sets are consolidated.
  redirects: {
    '/photos/chroma': '/photos/leo-velo',
    // The Acorn CSS case study moved to the Words post; keep the old live URL alive.
    '/work/acorn': '/words/acorn-css',
  },
  integrations: [
    sitemap({
      // Keep the hidden pages out of the sitemap (they're also noindex/nofollow).
      filter: (page) => !/\/(resume|style-guide)\/?$/.test(page),
    }),
  ],
  markdown: {
    // GitHub-flavored markdown: footnotes + task lists, which Acorn styles.
    gfm: true,
    smartypants: true,
    // Any https:// link opens in a new tab (and picks up Acorn's ↗, which keys
    // off target="_blank"). Scoped to https so internal + relative links stay put.
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['noopener', 'noreferrer'],
          test: (el) => typeof el.properties?.href === 'string' && el.properties.href.startsWith('https://'),
        },
      ],
    ],
  },
});
