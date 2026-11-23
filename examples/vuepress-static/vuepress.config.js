import { viteBundler } from '@vuepress/bundler-vite'
import { themeDefault } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: themeDefault(),

  lang: 'en-US',
  title: 'VuePress Boilerplate',
  description: 'A VuePress project',
});
