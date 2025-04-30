/**
 * An Example of using Node.js Zlib API in a Azion Edge Function.
 * Support:
 * - Partially supported (Extended by library `unenv`)
 * @module runtime-apis/nodejs/zlib/main
 * @example
 * // Execute with Azion Bundler:
 * npx edge-functions build --entry index.js
 *
 */
import zlib from "node:zlib";

/**
 * An example of using the Node.js Zlib API in a Azion Edge Function.
 * @param {*} event
 * @returns {Promise<Response>}
 */
const main = async (event) => {
  const codes = zlib.constants;

  try {
    const { gzipSync } = zlib;
    const input = "Hello, world!";
    gzipSync(input);
  } catch (error) {
    console.log("Error:", error);
    // [Error: [unenv] zlib.gzipSync is not implemented yet!]
  }

  return new Response(JSON.stringify(codes), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default main;
