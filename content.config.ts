import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    runtime: defineCollection({
      source: 'runtime/**/*.md',
      type: 'page',
      schema: z.object({
        title: z.string(),
      }),
    }),
  },
})
