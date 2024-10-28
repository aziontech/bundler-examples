/**
 * An Example of using Node.js Zlib API in a Azion Edge Function.
 * Support:
 * - Partially supported (Extended by library `browserify-zlib`)
 * @module runtime-apis/nodejs/zlib/main
 * @example
 * // Execute with Azion Bundler:
 * npx edge-functions build
 *
 */
import zlib from "node:zlib";

/**
 * An example of using the Node.js Zlib API in a Azion Edge Function.
 * @param {*} event
 * @returns {Promise<Response>}
 */
const main = async (event) => {
  const body = event.body ?? "Hello, World!";
  const input = Buffer.from(body, "base64");
  const output = zlib.gzipSync(input);
  return new Response(output.toString("base64"), {
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Encoding": "gzip",
    },
  });
};

export default main;
