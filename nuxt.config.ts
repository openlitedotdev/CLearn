export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['@unocss/reset/tailwind.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@unocss/nuxt',
  ],
  future: {
    compatibilityVersion: 4,
  },
  eslint: {
    config: { standalone: false },
  },
  content: {
    build: {
      markdown: {
        highlight: {
          langs: ['c', 'cpp'],
          theme: 'vitesse-dark',
        },
      },
    },
  },

})
