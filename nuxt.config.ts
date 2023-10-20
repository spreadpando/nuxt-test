// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  builder: 'webpack',
  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      }
    }
  }
})
