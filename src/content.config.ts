import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publicationsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    collection: z.string().optional(),
    permalink: z.string().optional(),
    excerpt: z.string().optional(),
    date: z.coerce.date().optional(),
    venue: z.string().optional(),
    paperurl: z.string().url().or(z.string()).optional(),
    citation: z.string().optional(),
    featured: z.boolean().optional(),
    impact_statement: z.string().optional(),
    format: z.string().optional(),
    theme_tags: z.array(z.string()).optional(),
    pdf: z.string().optional(),
    code: z.string().optional(),
    bibtex: z.string().optional(),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    excerpt: z.string().optional(),
  }),
});

export const collections = {
  'publications': publicationsCollection,
  'blog': blogCollection,
};
