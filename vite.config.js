import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入@vitejs/plugin-legacy
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [legacy({
  targets: ['defaults', 'not IE 11']
}),vue()],base: './',
})
