import { createRequire } from "module";
const require = createRequire(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss"],
  nitro: {
    preset: require.resolve("azion/preset/nuxt/ssr"),
    prerender: {
      routes: ["/"],
    },
  },
});
