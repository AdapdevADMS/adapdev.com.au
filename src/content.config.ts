/**
 * Astro Content Collections - schema for the blog.
 *
 * The schema enforces that every blog post has the fields BaseLayout relies on
 * for its meta description and Open Graph tags. Missing fields produce a build
 * error - defensive by design.
 */

import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(2).max(140),
    description: z.string().min(10).max(220),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Adapdev'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog };
