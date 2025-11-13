import { defineConfig } from "azion";

export default defineConfig({
  build: {
    entry: "src/server.ts",
    preset: 'typescript',
  },
});
