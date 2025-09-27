import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'; 
import svgr from 'vite-plugin-svgr' // ✅ import svgr plugin


// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
      tailwindcss(),
      svgr(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ✅ This sets @ to point to /src
    },
  },
  theme: {
    extend: {
      keyframes: {
        moveLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "move-left": "moveLeft 30s linear infinite",
      },
    },
  },
})
