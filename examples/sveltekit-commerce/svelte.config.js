import adapter from '@aziontech/presets/preset/sveltekit/ssr';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $components: 'src/components',
      $utils: 'src/utils'
    }
  }
};

export default config;
