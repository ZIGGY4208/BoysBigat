import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'Localhost', // Replace with your desired hostname, e.g., 'localhost' or '0.0.0.0'
    port: 3000, // Replace with your desired port number
  },
});
