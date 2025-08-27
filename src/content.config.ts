import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { stepSchema } from "./schema/step.schema.ts";

const steps = defineCollection({
  loader: glob({
    pattern: ["*.md"],
    base: "src/content/steps",
  }),
  schema: stepSchema,
});

export const collections = { steps };
