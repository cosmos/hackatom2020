export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'HackAtom V 2020',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Strap on your spacepants and get ready to hack, Cosmonaut.',
      },
      // Open Graph
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'HackAtom V 2020',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'HackAtom V 2020',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Strap on your spacepants and get ready to hack, Cosmonaut.',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://five.hackatom.org',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://five.hackatom.org/og-image.jpg',
      },
      // Twitter Card
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@cosmos' },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'HackAtom V 2020',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Strap on your spacepants and get ready to hack, Cosmonaut.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://five.hackatom.org/og-image.jpg',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'HackAtom V 2020',
      },
    ],
    link: [
      { rel: 'preload', as: 'image', href: 'hero-bg.jpg' },
      { rel: 'preload', as: 'image', href: 'V.svg' },
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon-svg.svg' },
      {
        rel: 'apple-touch-icon',
        size: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        href: '/apple-touch-icon-precomposed.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: 'black',
      },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' },
      {
        rel: 'preload',
        as: 'style',
        href:
          'https://fonts.googleapis.com/css?family=Inter:400,700,900&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Inter:400,700,900&display=swap',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [{ src: '~/assets/styles/main.styl', lang: 'stylus' }],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{ src: '~/plugins/vue-kinesis.client.js' }],
  env: {
    VUE_APP_AIRTABLE_API_KEY: process.env.VUE_APP_AIRTABLE_API_KEY,
  },
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // https://github.com/juliomrqz/nuxt-optimized-images
    '@aceforth/nuxt-optimized-images',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
  ],
  optimizedImages: {
    optimizeImages: true,
  },
  styleResources: {
    stylus: [
      '~/assets/styles/abstracts/_*.styl',
      '~/node_modules/rfs/stylus.styl',
    ],
  },
  /*
   ** Nuxt.js modules
   */
  // https://github.com/nuxt-community/google-gtag
  modules: ['@nuxtjs/google-gtag'],
  'google-gtag': {
    id: 'UA-51029217-19',
    config: {
      anonymize_ip: true, // anonymize IP
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload
      // linker: {
      //   domains: ['five.hackatom.org'],
      // },
    },
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
    // https://support.google.com/google-ads/answer/6095821
    additionalAccounts: [
      {
        id: 'AW-585698793', // required if you are adding additional accounts
        config: {
          send_page_view: false, // optional configurations
        },
      },
    ],
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    // https://nuxtjs.org/faq/postcss-plugins/#recommended-method
    transpile: ['vue-kinesis'],
    postcss: {
      plugins: {
        'postcss-font-variant': {},
      },
      preset: {
        // To change the postcss-preset-env settings
        autoprefixer: {},
      },
    },
  },
}
