import { defineCollection, z } from 'astro:content';

const personal = defineCollection({
  type: 'content',
  schema: z.object({}).passthrough(),
});

export const collections = {
  personal,
};
