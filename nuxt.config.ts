export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", '@pinia-plugin-persistedstate/nuxt',],
  css: ["@/assets/css/fonts.css"],
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_BASE_URL,
    },
  },
  ssr:false
});
