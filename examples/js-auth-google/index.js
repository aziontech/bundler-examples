import { handleRequest } from "./src/index.js";

export default async function main(event) {
  return handleRequest(event?.request, event?.args);
}
