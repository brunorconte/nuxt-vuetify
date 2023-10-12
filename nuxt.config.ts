import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: false,
  router: {
    options: {
      hashMode: true
    }
  },
  runtimeConfig: {
    public: {
      apiBase: '',
    }
  },
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
        vuetify()
      ))
    },
    '@pinia/nuxt',
  ],
  css: [
    'vuetify/lib/styles/main.sass',
    '@/style/custom.sass',
    '@/style/fonts.scss',
    '@mdi/font/css/materialdesignicons.min.css'
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  devtools: {
    enabled: true,
  },
})
