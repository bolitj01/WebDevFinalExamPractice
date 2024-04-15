// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/staticfiles/', // Specify the base path for app resources like JavaScript and CSS files
  // Proxy to Django for testing
  server: {
    proxy: {
    '/animals': {
      target: 'http://localhost:8000', // The Django server
      changeOrigin: true,
    }
  }
  }
});
