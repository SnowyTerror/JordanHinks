module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'jordanhinks',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Jordan Hinks website and graphic designer based in Northern Ireland.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:500,700' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  modules: [
    ['storyblok-nuxt', {
      accessToken: 'sKImL0uJd6ZrC9QCooqwpwtt',
      cacheProvider: 'memory'
    }]
  ],
  plugins: ['~/plugins/components.js'],
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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
