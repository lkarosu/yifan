import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite uses React and Tailwind's first-party plugin during local development and builds.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
