/**
 * An Example of using Node.js StringDecoder API in a Azion Edge Function.
 * Support:
 * - Partially supported (Extended by library `string_decoder`)
 * @module runtime-apis/nodejs/string-decoder/main
 * @example
 * // Execute with Azion Bundler:
 * npx edge-functions build
 * npx edge-functions dev
 */
import string_decoder from "node:string_decoder";

/**
 * An example of using the Node.js StringDecoder API in a Azion Edge Function.
 * @param {*} event
 * @returns {Promise<Response>}
 */
const main = async (event) => {
  const decoder = new string_decoder.StringDecoder("utf8");
  const buffer = Buffer.from([0xc2, 0xa2]);
  const decoded = decoder.write(buffer);
  console.log(decoded);
  // ¢

  return new Response(decoded, { status: 200 });
};

export default main;
