/**
 * An Example of using Node.js Timers API in a Azion Edge Function.
 * Support:
 * - Partially supported (Extended by library `timers-browserify`)
 * @module runtime-apis/nodejs/timers/main
 * @example
 * // Execute with Azion Bundler:
 * npx edge-functions build --entry index.js
 *
 */
import timers from "node:timers";

/**
 * An example of using the Node.js Timers API in a Azion Edge Function.
 * @param {*} event
 * @returns {Promise<Response>}
 */
const main = async (event) => {
  console.log("Hello, world!");
  console.log("Waiting for 5 seconds...");
  await new Promise((resolve) => timers.setTimeout(resolve, 2000));
  return new Response("Done!", { status: 200 });
};

export default main;
