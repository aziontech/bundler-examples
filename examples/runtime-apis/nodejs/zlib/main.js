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
  const output = zlib.gzipSync(body);

  // decode
  const decom = zlib.gunzipSync(Buffer.from(output)).toString();
  console.log(decom);

  return new Response(output.toString("base64"), {
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Encoding": "gzip",
    },
  });
};

export default main;
