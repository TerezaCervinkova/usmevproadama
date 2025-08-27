import { z } from "astro:content";

export const stepSchema = z.object({
  title: z.string(),
  slug: z.string(),
  order: z.number(),
  preview: z.string(),
  icoPath: z.string().optional(),
});

export type StepType = z.infer<typeof stepSchema>;
