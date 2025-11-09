import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { stepSchema } from "./schema/step.schema.ts";
import { postSchema } from "./schema/post.schema.ts";
import { statisticsSchema } from "./schema/statistics.schema.ts";

const steps = defineCollection({
  loader: glob({
    pattern: ["*.md"],
    base: "src/content/steps",
  }),
  schema: stepSchema,
});

const childPosts = defineCollection({
  loader: glob({
    pattern: ["*.md"],
    base: "src/content/child/posts",
  }),
  schema: postSchema,
});

const statistics = defineCollection({
  loader: glob({
    pattern: ["*.md"],
    base: "src/content/child/statistics",
  }),
  schema: statisticsSchema,
});

const guidePosts = defineCollection({
  loader: glob({
    pattern: ["*.md"],
    base: "src/content/guide/posts",
  }),
  schema: postSchema,
});

export const collections = { steps, childPosts, statistics, guidePosts };
