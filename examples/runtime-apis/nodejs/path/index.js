/**
 * An Example of using the Node.js Path API in a Azion Edge Function.
 * Support:
 * - Partially supported (Extended by library `path-browserify`)
 * @module runtime-apis/nodejs/path/main
 * @example
 * // Execute with Azion Bundler:
 * npx edge-functions build --entry index.js
 * npx edge-functions dev
 */
import path from "node:path";

/**
 * An example of using the Node.js Path API in a Azion Edge Function.
 * @param {*} event
 * @returns {Promise<Response>}
 */
const main = async (event) => {
  const pathName = path.join("/", "images", "image.jpg");
  console.log("Path", pathName);
  return new Response(`Path: ${pathName}`);
};

export default main;
