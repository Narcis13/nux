// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig:{
    openai_key:process.env.openai_key,
    public:{
      placeHost:process.env.NUXT_PLACE_HOST,
    }
    
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
