
export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Snippets',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2d3748' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/fonts/captain-icon.css',
    '~/assets/css/styles.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'Blog-Article',
        path: '/blog/:year/:month/:title',
        component: resolve(__dirname, 'pages/blog/-article.vue')
      })
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS: true,
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    },

    extend(config, ctx) {
    }
  },
  components: true,
  generate: {
    dir: './firebase/public'
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-div',
      'markdown-it-attrs'
    ]
  }
}
