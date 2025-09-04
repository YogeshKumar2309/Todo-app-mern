import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],

  server: {
    host: '0.0.0.0',   // All IPs ko allow karega
    port: 3000,         // Tum jo bhi port chahte ho, wo specify karo
    strictPort: true,   // Agar port already use ho toh fail ho jayega
  }
})

