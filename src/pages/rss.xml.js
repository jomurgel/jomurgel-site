import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

// /rss.xml — the Words & Photos feed. Newest first, drafts excluded.
export async function GET(context) {
  const posts = (await getCollection('words', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: 'Jo Murgel — Words & Photos',
    description: 'Dev notes, reflections, and photo studies.',
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description ?? '',
      pubDate: p.data.date,
      link: `/words/${p.id}/`,
    })),
  });
}
