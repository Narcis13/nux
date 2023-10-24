// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-quasar-ui',
    '@pinia/nuxt'
  ],
  build:{
    transpile:['knex']
  },
  quasar:{
    plugins: [
      'Notify',
      'Dialog'
    ]
  }
})
