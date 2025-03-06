// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",

  app: {
    head: {
      title: "Nuxt Blog",
      meta: [
        {
          name: "description",
          content:
            "My blog covers a wide range of topics, sharing thoughts, insights, and experiences on everything from technology and travel to daily life and personal growth.",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
    pageTransition: { name: "page", mode: "out-in" },
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
            @use "~/assets/scss/partials/_animations.scss" as *;
          `,
        },
      },
    },
  },

  // Add modules
  modules: ["@nuxt/image", "@pinia/nuxt", "@nuxtjs/google-fonts"],

  // Setups for @nuxt/image module
  image: {
    screens: {
      xs: 320,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },

  // Setups for @nuxtjs/google-fonts module
  googleFonts: {
    families: {
      Poppins: [400, 600, 700],
    },
    display: "swap",
    preload: true,
  },
});
