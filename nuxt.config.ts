// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  components: ['~/components'],
  modules: [
    'nuxt-icon',
    '@artmizu/nuxt-prometheus',
    '@vueuse/nuxt',
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@element-plus/nuxt",
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  plugins: [
    { src: '~/plugins/aos', mode: 'client' },
  ],
  css: [
    '~/assets/css/style.css',
    '~/assets/css/plugins.css',
  ],
  supabase: {
    redirect: false,
  },
})