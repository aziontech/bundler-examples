# Nuxt.js SSR

This example shows how to use the Azion preset for Nuxt.js SSR.

## Configuration SSR

Configure your `nuxt.config.ts` to use the Azion SSR preset:

```typescript
import { createRequire } from "module";
const require = createRequire(import.meta.url);

export default defineNuxtConfig({
  nitro: {
    preset: require.resolve("azion/preset/nuxt/ssr"),
  },
});
```

Or directly with the path node_modules:

```typescript
export default defineNuxtConfig({
  nitro: {
    preset: "./node_modules/azion/packages/presets/src/presets/nuxt/nitro/ssr",
  },
});
```
