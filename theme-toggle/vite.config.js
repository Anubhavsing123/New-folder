import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

// Tailwind doesn't need to be imported here — it's handled via PostCSS
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
