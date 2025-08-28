// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/image', '@nuxt/ui'],
  ui: {
    prefix: 'RL',
    theme: {
      colors: [
        'primary',
        'secondary',
        'tertiary',
        'info',
        'success',
        'warning',
        'error',
        'neutral',
      ]
    }
  },
  icon: {
    customCollections: [
      {
        prefix: 'logos',
        dir: './app/assets/icons/logos',
        normalizeIconName: false,
      },
      {
        prefix: 'general',
        dir: './app/assets/icons/general',
        normalizeIconName: false,
      },
      {
        prefix: 'third-party',
        dir: './app/assets/icons/third-party',
        normalizeIconName: false,
      }
    ],
  },
  app: {
    head: {
      title: 'idantity.me',
      titleTemplate: '%s | idantity.me',
      meta: [
        { name: 'description', content: '' },
        { name: 'author', content: 'Daniel Marchi' },
        { name: 'creator', content: 'Daniel Marchi' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },
  css: ["./app/assets/css/main.css"],
})