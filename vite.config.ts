import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/canli_site_v1/",
  plugins: [react()]
  ,
  server: {
    watch: {
      usePolling: true
    },
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..']
    }
  },
  build: {
    chunkSizeWarningLimit: 1600,
  }
}
)
