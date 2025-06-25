/**
 * An Example of using Node.js URL API in a Azion Edge Function.
 * Support:
 * - Partially supported (Extended by library `url`)
 * @module runtime-apis/nodejs/url/main
 * @example
 * // Execute with Azion Bundler:
 * npx edge-functions build --entry index.js
 * npx edge-functions dev
 */
import url from "node:url";

/**
 * An example of using the Node.js URL API in a Azion Edge Function.
 * @param {*} event
 * @returns {Promise<Response>}
 */
const main = async (event) => {
  /**
   * URL globalThis object
   * https://developer.mozilla.org/en-US/docs/Web/API/URL
   * if use URL in the browser, don't need to import
   */
  const newUrl = new URL("https://example.com/some/path?format=json&page=1");
  console.log("newURL", newUrl);

  const urlFormated = url.format({
    protocol: "https",
    hostname: "example.com",
    pathname: "/some/path",
    query: {
      page: 1,
      format: "json",
    },
  });

  console.log(url.parse(urlFormated));

  return new Response("Done!", { status: 200 });
};

export default main;
