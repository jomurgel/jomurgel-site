import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Words & Photos — one combined, tagged stream of writing + photo posts.
// Markdown + frontmatter: the MCP-writable content engine.
const words = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/words' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    type: z.enum(['writing', 'photo']).default('writing'),
    coverImage: z.string().optional(),
    coverAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Work — case studies. Deeper, structured pieces; their own /work/[slug] pages.
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    client: z.string().optional(),
    role: z.string().optional(),
    year: z.string().optional(),
    link: z.string().url().optional(),
    linkLabel: z.string().optional(),
    stack: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    coverAlt: z.string().optional(),
    ink: z.enum(['c', 'm', 'y']).default('m'),
    span: z.number().default(1), // grid columns to span on the Work grid (1 = 33%, 2 = 66%)
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { words, work };
