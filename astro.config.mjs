import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jomurgel.com',
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
