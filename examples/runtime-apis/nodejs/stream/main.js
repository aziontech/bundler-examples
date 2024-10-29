/**
 * An Example of using Node.js Stream API in a Azion Edge Function.
 * Support:
 * - Partially supported (Extended by library `stream-browserify`)
 * @module runtime-apis/nodejs/stream/main
 * @example
 * // Execute with Azion Bundler:
 * npx edge-functions build
 * npx edge-functions dev
 */
import stream from "node:stream";

/**
 * An example of using the Node.js Stream API in a Azion Edge Function.
 * @param {*} event
 * @returns {Promise<Response>}
 */
const main = async (event) => {
  return new Promise((resolve, reject) => {
    const chunks = ["chunk1", "chunk2", "chunk3", "chunk4", "chunk5"];

    const nextChunk = () => {
      const chunk = chunks.shift();
      if (chunk) {
        console.log("Chunk", chunk);
        nextChunk();
      }
    };

    const readable = new stream.Readable({
      encoding: "utf8",
      read() {
        nextChunk();
      },
    });

    const writable = new stream.Writable({
      write(chunk, encoding, callback) {
        console.log("Chunk", chunk.toString());
        callback();
      },
    });

    readable.pipe(writable);

    resolve(new Response("Done"));
  });
};

export default main;
