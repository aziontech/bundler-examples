/**
 * This file was automatically generated based on your preset configuration.
 *
 * For better type checking and IntelliSense:
 * 1. Install azion as dev dependency:
 *    npm install -D azion
 *
 * 2. Use defineConfig:
 *    import { defineConfig } from 'azion'
 *
 * For more configuration options, visit:
 * https://github.com/aziontech/azion
 */

module.exports = {
  build: {
    preset: "javascript",
    entry: "./index.js",
    bundler: "esbuild",
    polyfills: false,
    worker: true,
  },
  rules: {
    request: [
      {
        name: "Execute Edge Function",
        match: "^\\/",
        behavior: {
          runFunction: {
            path: ".edge/worker.js",
          },
        },
      },
    ],
  },
};
