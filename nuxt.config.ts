export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", '@pinia-plugin-persistedstate/nuxt',],
  css: ["@/assets/css/fonts.css"],
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_BASE_URL,
    },
  },
  ssr:false,
  // router: {
  //   extendRoutes(routes, resolve) {
  //     routes.push(
  //       {
  //         path: '/auth/company-signup',
  //         component: resolve(__dirname, 'pages/auth/company-signup.vue'),
  //         name: 'company-signup',
  //       },
  //       {
  //         path: '/auth/email-verification',
  //         component: resolve(__dirname, 'pages/auth/email-verification.vue'),
  //         name: 'email-verification',
  //       },
  //       {
  //         path: '/auth/select-plan',
  //         component: resolve(__dirname, 'pages/auth/select-plan.vue'),
  //         name: 'select-plan',
  //       }
  //     );
  //   },
  // },
});
