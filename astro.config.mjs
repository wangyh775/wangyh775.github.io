import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://wangyh775.github.io/',
  base: '/',
  integrations: [mdx(), tailwind()]
});
