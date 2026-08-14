import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jomurgel.com',
  // Temporary: the standalone Chroma set is folded into Leo for now. Remove once
  // the leo/sylvia photo sets are consolidated.
  redirects: {
    '/photos/chroma': '/photos/leo-velo',
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
  },
});
