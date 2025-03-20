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
    '@nuxtjs/i18n',
  ],
  future: {
    compatibilityVersion: 4,
  },
  eslint: {
    config: { standalone: false },
  },
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', language: 'en-US', dir: 'ltr', file: 'en.json' },
      { code: 'es', name: 'Spanish', language: 'es-CO', dir: 'ltr', file: 'es.json' },
    ],
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
