import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { stepSchema } from "./schema/step.schema.ts";
import { guidePostSchema } from "./schema/guidePost.schema.ts";
import { statisticsSchema } from "./schema/statistics.schema.ts";

const steps = defineCollection({
  loader: glob({
    pattern: ["*.md"],
    base: "src/content/steps",
  }),
  schema: stepSchema,
});

const guidePosts = defineCollection({
  loader: glob({
    pattern: ["*.md"],
    base: "src/content/guide/posts",
  }),
  schema: guidePostSchema,
});


const statistics = defineCollection({
  loader: glob({
    pattern: ["*.md"],
    base: "src/content/guide/statistics",
  }),
  schema: statisticsSchema,
});




export const collections = { steps, guidePosts, statistics };
