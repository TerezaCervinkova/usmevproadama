import { z } from "astro:content";

export const guidePostSchema = z.object({
  title: z.string(),
  slug: z.string(),
  order: z.number(),
  preview: z.string(),
});

export type GuidePostType = z.infer<typeof guidePostSchema>;
