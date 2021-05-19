'use strict'

const resolve = require('path').resolve

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Adonuxt',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Adonuxt project'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'stylesheet', href: 'vendor/simplebar/dist/simplebar.min.css' },
      { rel: 'stylesheet', href: 'vendor/tiny-slider/dist/tiny-slider.css' },
      { rel: 'stylesheet', href: 'vendor/lightgallery.js/dist/css/lightgallery.min.css' }
    ],
    script: [
      { src: "vendor/bootstrap/dist/js/bootstrap.bundle.min.js", type: "text/javascript" },
      { src: "vendor/simplebar/dist/simplebar.min.js", type: "text/javascript" },
      { src: "vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js", type: "text/javascript" },
      { src: "vendor/tiny-slider/dist/min/tiny-slider.js", type: "text/javascript" },
      { src: "vendor/imagesloaded/imagesloaded.pkgd.min.js", type: "text/javascript" },
      { src: "vendor/shufflejs/dist/shuffle.min.js", type: "text/javascript" },
      { src: "vendor/lightgallery.js/dist/js/lightgallery.min.js", type: "text/javascript" },
      { src: "vendor/parallax-js/dist/parallax.min.js", type: "text/javascript" },
      //{ src: "theme.js", type: "text/javascript" }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/theme.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/assets/js/theme.js', mode: 'client' }
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#e85a4f' },
  /*
  ** Point to resources
  */
  srcDir: resolve(__dirname, '..', 'resources'),

  /*
  ** This option lets you configure various settings
  */
  build: {
    vendor: [ 'static/theme.js' ]
  }
}
