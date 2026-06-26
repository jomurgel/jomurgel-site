import { getCollection } from 'astro:content';

export const tagSlug = (t: string) => t.replace(/\s+/g, '-').toLowerCase();

// Vivid hand-picked rainbow stops (red → violet → pink). Tags are spread
// evenly across these so the set always spans the full rainbow.
const STOPS = [
  '#ff3b30', '#ff9500', '#ffcc00', '#ffe600', '#7ed321', '#34c759',
  '#00c2a8', '#00a3ff', '#007aff', '#5856d6', '#8b5cf6', '#af52de', '#ff2d95',
];

function hexLuminance(hex: string) {
  const m = hex.replace('#', '').match(/.{2}/g)!
    .map((x) => parseInt(x, 16) / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * m[0] + 0.7152 * m[1] + 0.0722 * m[2];
}

export type TagInfo = { name: string; slug: string; color: string; text: string; count: number };

export async function getAllTags(): Promise<TagInfo[]> {
  const posts = await getCollection('words', ({ data }) => !data.draft);
  const counts = new Map<string, number>();
  posts.forEach((p) => p.data.tags.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1)));
  const names = [...counts.keys()].sort();
  const n = names.length;
  return names.map((name, i) => {
    const color = STOPS[Math.round((i / Math.max(1, n - 1)) * (STOPS.length - 1))];
    return {
      name,
      slug: tagSlug(name),
      color,
      text: hexLuminance(color) > 0.45 ? '#000' : '#fff',
      count: counts.get(name)!,
    };
  });
}
