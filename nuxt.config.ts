// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 8000
  },
  css: ["~/assets/css/main.css", "~/assets/fonts/stylesheet.css"],
  modules: ['@nuxthq/ui'],
  ui: {
    icons: ['mdi', 'ep', 'heroicons']
  }
})
