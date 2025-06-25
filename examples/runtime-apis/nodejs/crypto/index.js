/**
 * An example of using the Node.js Crypto API in a Azion Edge Function.
 * Support:
 * - Extended by library `crypto-browserify`
 * - Implemented aditional methods:
 *  - randomUUID (named exported only)
 * @module runtime-apis/nodejs/crypto/main
 * @example
 * // Execute with Azion Bundler:
 * npx edge-functions build --entry index.js
 * npx edge-functions dev
 */
import crypto from "node:crypto";

/**
 * Example of using the Node.js Crypto API
 * @param {*} event
 * @returns
 */
const main = async (event) => {
  const hmac = crypto.createHmac("sha256", "a secret");
  hmac.update("Azion Edge Functions");
  const hmacResult = hmac.digest("hex");
  console.log(hmacResult);
  // 57c4ef39b84510917c1f1d98b43e474c2741ebf063369abea9b705f24ed2259a

  return new Response("Done!", { status: 200 });
};

export default main;
