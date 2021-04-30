const netlify = require('@sveltejs/adapter-netlify')
const sveltePreprocess = require('svelte-preprocess')
const autoprefixer = require('autoprefixer')
const pkg = require('./package.json')

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  preprocess: sveltePreprocess({
    scss: true,
    postcss: {
      plugins: [autoprefixer()],
    },
    defaults: {
      script: 'typescript',
      style: 'scss',
    },
  }),
  kit: {
    adapter: netlify(),
    target: '#svelte',
  },
}
