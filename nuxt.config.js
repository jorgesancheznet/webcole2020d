export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Salesianos Centro Don Bosco de Villamuriel de Cerrato',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {"http-equiv":"Cache-Control", content:"no-cache, no-store, must-revalidate"},
      {"http-equiv":"Pragma", content:"no-cache"},
      {"http-equiv":"Expires", content:"0"},
      { hid: 'description', name: 'description', content: 'Salesianos Centro Don Bosco de Villamuriel de Cerrato, Centro de Formación Profesional y de Educación Secundaria' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:[
      {
        src:"https://cdn.jsdelivr.net/npm/emailjs-com@2.4.1/dist/email.min.js"
      },
      {
        src:"https://www.google.com/recaptcha/api.js",
        async:true,
        defer:true
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "~/assets/estilos/general.scss"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~/plugins/client-only/aos.client.js",
    "~/plugins/client-only/swiper.client.js"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/style-resources',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
  },

}
