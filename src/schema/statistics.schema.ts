import { z } from "astro:content";

export const statisticsSchema = z.object({
  title: z.string(),
  slug: z.string(),
  order: z.number(),
  preview: z.string(),
});

export type StatisticsType = z.infer<typeof statisticsSchema>;
