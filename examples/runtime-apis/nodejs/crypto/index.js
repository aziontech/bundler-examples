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
  // Never hardcode the HMAC key. Read it from the environment so the secret
  // lives outside the bundle — configure HMAC_SECRET as an environment
  // variable in your Azion application.
  const hmacSecret = process.env.HMAC_SECRET;
  if (!hmacSecret) {
    return new Response("HMAC_SECRET is not configured.", { status: 500 });
  }

  const hmac = crypto.createHmac("sha256", hmacSecret);
  hmac.update("Azion Edge Functions");
  const hmacResult = hmac.digest("hex");
  console.log(hmacResult);

  return new Response("Done!", { status: 200 });
};

export default main;
