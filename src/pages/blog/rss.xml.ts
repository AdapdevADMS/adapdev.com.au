/**
 * Blog RSS feed - /blog/rss.xml
 * Uses @astrojs/rss (listed as a dependency per section 8 step 14).
 */
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext): Promise<Response> {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  return rss({
    title: 'Adapdev - Blog',
    description:
      'Release notes, essays and practical pieces from Adapdev Pty Ltd.',
    site: context.site ?? 'https://adapdev.com.au',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}`,
    })),
    customData: '<language>en-au</language>',
  });
}
