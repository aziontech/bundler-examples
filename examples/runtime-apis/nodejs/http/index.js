/**
 * An Example of using the Node.js HTTP API in a Azion Edge Function.
 * Support:
 * - Partial support by library `unenv`
 * @module runtime-apis/nodejs/http/main
 * @example
 * // Execute with Azion Bundler:
 * npx edge-functions build --entry index.js
 * npx edge-functions dev
 */
import http from "node:http";

/**
 * An example of using the Node.js HTTP API in a Azion Edge Function.
 * @param {*} event
 * @returns {Promise<Response>}
 */
const main = async (event) => {
  // this is a workaround to make the http module work in the browser
  const protocol = event.request.headers.get("x-forwarded-proto") || "http";
  globalThis.location = {
    protocol,
  };
  try {
    http
      .request("https://jsonplaceholder.typicode.com/todos/1", (res) => {
        console.log("Got response: " + res.statusCode);
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          console.log("No more data in response.");
          console.log("BODY: " + data);
          resolve(new Response(JSON.stringify(data)));
        });

        res.on("error", (err) => {
          console.error(err);
          reject(new Response("Error occurred"));
        });
      })
      .end();
  } catch (error) {
    // [unenv] http.request is not implemented yet!
    console.error("Error: ", error);
    return new Response("Done!", { status: 200 });
  }
};

export default main;
