import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    runtime_en: defineCollection({
      source: {
        include: 'runtime/en/**/*.md',
        prefix: '',
      },
      type: 'page',
      schema: z.object({
        title: z.string(),
      }),
    }),

    runtime_es: defineCollection({
      source: {
        include: 'runtime/es/**/*.md',
        prefix: '',
      },
      type: 'page',
      schema: z.object({
        title: z.string(),
      }),
    }),
  },
})
