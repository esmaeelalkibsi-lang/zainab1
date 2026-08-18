import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'motion-vendor'
            if (id.includes('react-router-dom')) return 'router-vendor'
            if (id.includes('react-dom') || id.includes('/react/')) return 'react-vendor'
            if (id.includes('@supabase')) return 'supabase-vendor'
          }
        },
      },
    },
  },
})
