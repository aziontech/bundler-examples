/**
 * An example of using the Node.js fs module in Azion's runtime.
 * Support:
 * - Partially supported (Custom implementation)
 * @module runtime-apis/nodejs/fs/main
 * @example
 * // Execute with Azion Bundler:
 * npx edge-functions build --entry index.js
 * npx edge-functions dev
 */
import fs from "node:fs";

const main = async (event) => {
  // (Sync) in memory file system on bundle
  // to use sync (read) methods, you need config build.memoryFS (see in azion.config.cjs)
  const dataReadSync = fs.readFileSync("./hello.txt");
  console.log("Read File Sync", dataReadSync.toString());

  fs.writeFile("./hello1.txt", "Hello, Azion!", (err) => {
    if (err) {
      console.error(err);
    }
  });

  // (Async) in Azion's file system
  const data = await fs.promises.readFile("./hello.txt");
  console.log("Read File", data.toString());

  await fs.promises.writeFile("./hello2.txt", "Hello, Azion!");

  return new Response("Done!", { status: 200 });
};

export default main;
