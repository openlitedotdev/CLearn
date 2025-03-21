export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
  ],
  devtools: { enabled: true },
  css: ['@unocss/reset/tailwind.css'],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'one-dark-pro',
          langs: ['c', 'cpp'],
        },
      },
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    detectBrowserLanguage: false,
    locales: [
      { code: 'en', name: 'English', language: 'en-US', dir: 'ltr', file: 'en.json' },
      { code: 'es', name: 'Spanish', language: 'es-CO', dir: 'ltr', file: 'es.json' },
    ],
  },
})
