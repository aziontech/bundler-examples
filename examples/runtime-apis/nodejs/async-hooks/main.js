/**
 * An Example of using the Node.js Async Hooks API in an Azion Edge Function.
 * Support:
 * - Partial support
 * @module runtime-apis/nodejs/async-hooks/main
 * @example
 * // Execute with Azion Bundler:
 * npx edge-functions build
 * npx edge-functions dev
 */
import { AsyncLocalStorage } from "node:async_hooks";

const requestId = new AsyncLocalStorage();

function logAsyncContext(state) {
  console.log(`${requestId.getStore()} - ${state}`);
}

function doSomething() {
  logAsyncContext("log from sync function");
  setTimeout(() => doSomethingElse(), 100);
}

function doSomethingElse() {
  logAsyncContext("log from setTimeout callback");
}

/**
 * Example of using the Node.js Async Hooks API
 * @param {*} event
 * @returns {Promise<Response>}
 */
async function main(event) {
  const id = event.request.headers.get("X-Request-Id") ?? "unknown";

  return requestId.run(id, () => {
    doSomething();
    logAsyncContext("log from another sync function");
    return new Response("ok");
  });
}

export default main;
