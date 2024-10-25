/**
 * An Example of using the Node.js OS API in a Azion Edge Function.
 * Support:
 * - Partially supported (Extended by library `os-browserify`)
 * @module runtime-apis/nodejs/os/main
 * @example
 * // Execute with Azion Bundler:
 * npx edge-functions build
 * npx edge-functions dev
 */
import os from "node:os";

/**
 * An example of using the Node.js OS API in a Azion Edge Function.
 * @param {*} event
 * @returns Promise<Response>
 */
const main = async (event) => {
  return new Promise((resolve, reject) => {
    const platform = os.platform();
    console.log("Platform", platform);
    resolve(new Response(`platform: ${platform}`));
  });
};

export default main;
