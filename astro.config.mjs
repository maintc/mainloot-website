import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), icon()],
  output: "server",
  adapter: cloudflare({
    routes: {
      extend: {
        exclude: [{ pattern: '/api/*' }], // Use Starlight's pagefind search, which ise
      }
    }
  })
});