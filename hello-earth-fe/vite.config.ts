import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



// https://vite.dev/config/
export default defineConfig({
  base: '/hello-earth/', // ¡IMPORTANTE! usa el nombre de tu repo

  plugins: [
    tailwindcss(),
    react()],
})
