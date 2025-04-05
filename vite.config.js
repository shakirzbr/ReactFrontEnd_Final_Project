import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: "/ReactFrontEnd_Final_Project",
  plugins: [react()],
})