/**
 * An Example of using Node.js VM API in a Azion Edge Function.
 * Support:
 * - Partially supported (Extended by library `unenv`)
 * @module runtime-apis/nodejs/vm/main
 * @example
 * // Execute with Azion Bundler:
 * npx edge-functions build --entry index.js
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
  // This is mocked by unenv
  const me = await vm.measureMemory({
    execution: true,
  });
  console.log(`Memory usage: ${JSON.stringify(me)}`);

  // This is mocked by unenv
  try {
    const vmResult = vm.runInThisContext(
      'globalThis.contextVar = "change by vm";'
    );
    console.log(
      `vmResult: '${vmResult}', globalThis.contextVar: '${globalThis.contextVar}'`
    );
  } catch (error) {
    console.log(`Error: ${error}`);
  }

  return new Response("Done!", { status: 200 });
};

export default main;
