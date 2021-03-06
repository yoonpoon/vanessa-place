require('dotenv').config()

const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Vanessa Place',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      {
        name: 'og:image',
        content:
          'http://images.ctfassets.net/4wseqcsd8m40/4F5HPmDaGQoIwuUgMw0mqE/968c6e24bfa9ab48d55b14fa2b48982d/DIS_BG_8.jpg?fl=progressive'
      },
      { name: 'og:description', content: 'How am I possible?' }
    ],
    link: [
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://unpkg.com/basscss@7.1.1/css/basscss.min.css'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'red' },

  /*
  ** Global CSS
  */
  css: ['@/assets/styles/main.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/contentful' },
    { src: '~/plugins/marquee', ssr: false },
    { src: '~/plugins/Masonry', ssr: false },
    { src: '~/plugins/ScrollReveal', ssr: false },
    { src: '~/plugins/infiniteScroll', ssr: false }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
