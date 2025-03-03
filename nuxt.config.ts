import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",

  app: {
    head: {
      title: "Nuxt Blog",
      meta: [{ name: "description", content: "My technology blog." }],
    },
  },

  devtools: { enabled: true },

  routeRules: {
    "/": { redirect: "/home" },
  },

  css: ["~/assets/scss/main.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/scss/partials/_variables.scss" as *;
            @use "~/assets/scss/partials/_functions.scss" as *;
            @use "~/assets/scss/partials/_mixins.scss" as *;
            @use "~/assets/scss/partials/_helpers.scss" as *;
          `,
        },
      },
    },
    plugins: [svgLoader()],
  },

  modules: ["@nuxt/image", "@pinia/nuxt"],
});
