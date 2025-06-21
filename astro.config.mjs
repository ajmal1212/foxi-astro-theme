import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import cloudflare from '@astrojs/cloudflare'; // ✅ Add this line
import mdx from '@astrojs/mdx'

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'ignore',
  build: {
    format: 'file',
  },
  site: "https://codenetic.tech/",
  integrations: [
    tailwind(),
    icon(),
    sitemap(),
    mdx(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
