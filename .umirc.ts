import { defineConfig } from 'umi'

export default defineConfig({
  mpa: {
    template: 'index.html',
    layout: '@/layouts/mpa/index.tsx'
  },
  npmClient: 'yarn',
  publicPath: '/test/',
  mountElementId: 'test'
})
