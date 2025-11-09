import { z } from "astro:content";

export const postSchema = z.object({
  title: z.string(),
  slug: z.string(),
  order: z.number(),
  preview: z.string(),
});

export type PostType = z.infer<typeof postSchema>;
