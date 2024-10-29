/**
 * An Example of using Node.js VM API in a Azion Edge Function.
 * Support:
 * - Partially supported (Extended by library `vm-browserify`)
 * @module runtime-apis/nodejs/vm/main
 * @example
 * // Execute with Azion Bundler:
 * npx edge-functions build
 * npx edge-functions dev
 */
import vm from "node:vm";

// Set a global variable because bundler esbuild minify the code and rename the variable.
globalThis.contextVar = "initial value";

/**
 * An example of using the Node.js VM API in a Azion Edge Function.
 * @param {*} event
 * @returns {Promise<Response>}
 */
const main = async (event) => {
  const vmResult = vm.runInThisContext(
    'globalThis.contextVar = "change by vm";'
  );
  console.log(
    `vmResult: '${vmResult}', globalThis.contextVar: '${globalThis.contextVar}'`
  );
  return new Response("Done!", { status: 200 });
};

export default main;
