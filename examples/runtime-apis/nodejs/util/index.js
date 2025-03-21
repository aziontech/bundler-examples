/**
 * An Example of using Node.js Util API in a Azion Edge Function.
 * Support:
 * - Partially supported (Extended by library `util`)
 * @module runtime-apis/nodejs/util/main
 * @example
 * // Execute with Azion Bundler:
 * npx edge-functions build
 * npx edge-functions dev
 */
import util from "node:util";

const myTest = (callback) => {
  try {
    callback(null, "Success!");
  } catch (err) {
    callback(err);
  }
};

/**
 * An example of using the Node.js Util API in a Azion Edge Function.
 * @param {*} event
 * @returns {Promise<Response>}
 */
const main = async (event) => {
  const promisifyTest = util.promisify(myTest);
  const result = await promisifyTest();
  console.log(util.inspect(result, { showHidden: false, depth: null }));

  return new Response("Done!", { status: 200 });
};

export default main;
