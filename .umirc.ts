import { defineConfig } from 'umi'

export default defineConfig({
  mpa: {
    template: 'index.html',
    layout: '@/layouts/mpa/index.tsx'
  },
  plugins: ['./build.plugin.ts'],
  npmClient: 'yarn',
})
