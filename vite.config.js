import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      // 🛑 Forces Vite to completely ignore changes made to your database file
      ignored: ['**/db.json'], 
    },
  },
})
