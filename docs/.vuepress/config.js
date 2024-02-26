import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: '笨方法实验室',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: 'https://s3.bmp.ovh/imgs/2024/02/18/6afa4bdb143bd80f.png',

    navbar: ['/', '/course/writing', '/course/productivity', '/course/100card', '/course/100question', '/course/100Inspiration'],
  }),

  bundler: viteBundler(),
})
