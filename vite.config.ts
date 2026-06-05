import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Relative base keeps assets resolvable on GitHub Pages' project path and locally.
// Routing uses HashRouter so the static deploy needs no server rewrites.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
})
