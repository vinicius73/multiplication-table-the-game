import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pkg from './package.json'

process.env.VITE_APP_VERSION = pkg.version

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})
