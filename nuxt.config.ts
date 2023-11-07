// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig:{
    openai_key:process.env.openai_key
  },
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
