// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 8000,
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  css: ["~/assets/css/main.css", "~/assets/fonts/stylesheet.css"],
  modules: ["@nuxthq/ui"],
  ui: {
    icons: ["mdi", "ep", "heroicons"],
  },
  extends: ["nuxt-seo-kit"],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://nehemiekoffi.com",
      siteName: "Nehemie KOFFI - Welcome",
      siteDescription:
        "I'm a passionate and experienced Fullstack Developer / Product Designer / Life Coach, cat lover, AI enthusiast based in Abidjan",
      language: "en-US", // prefer more explicit language codes like `en-AU` over `en`
    },
  },
});
