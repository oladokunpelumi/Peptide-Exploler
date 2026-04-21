import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages expects base to match the repo name. 
  // Change if the repo naming spelling gets fixed!
  base: '/Peptide-Exploler/', 
})
