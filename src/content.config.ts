import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const steps = defineCollection({
  loader: glob({
    pattern: ["*.md"],
    base: "src/content/steps",
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    order: z.number(),
    preview: z.string(),
    icoPath: z.string().optional(),
  }),
});

export const collections = { steps };
