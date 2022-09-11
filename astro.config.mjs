import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig(
  /** @type {import('astro').AstroUserConfig} */
  {
    site: "https://kaustubh-2406.github.io",
    integrations: [react()],
  }
);
