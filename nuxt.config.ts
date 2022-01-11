import { defineNuxtConfig } from 'nuxt3'
import { resolve } from 'path'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  srcDir: './src/',
  buildModules: [['@pinia/nuxt', { disableVuex: true }]],
  css: [
    'modern-css-reset',
    // '@fortawesome/fontawesome-free/css/all.css',
    // '@fortawesome/fontawesome-free/css/brands.css',
    // '@fortawesome/fontawesome-free/css/fontawesome.css',
    // '@fortawesome/fontawesome-free/css/regular.css',
    // '@fortawesome/fontawesome-free/css/solid.css',
    // '@fortawesome/fontawesome-free/css/svg-with-js.css',
    // '@fortawesome/fontawesome-free/css/v4-shims.css',
  ],
  alias: {
    '@/*': resolve('./src'),
    '~/*': resolve('./src'),
  },
})
