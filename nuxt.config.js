export default {
  ssr: true,
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Mouton Cadet - Whishes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'noindex, nofollow' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['@/assets/styles/main.scss'],
  /*
   ** Import SCSS for components
   */
  styleResources: {
    scss: ['@/assets/styles/import.scss'],
  },
  plugins: [],
  components: true,
  modules: ['@nuxtjs/style-resources'],
  buildModules: [
    [
      '@nuxtjs/google-analytics',
      {
        id: process.env.GOOGLE_ANALYTICS_ID,
        debug: {
          enabled: process.env.GOOGLE_ANALYTICS_DEBUG,
          sendHitTask: true,
        },
      },
    ],
  ],
  build: {},
}
