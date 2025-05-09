import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true  // Important for axios
    }
  },
  optimizeDeps: {
    include: ['axios']  // Explicitly include axios
  }
})