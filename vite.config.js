import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const allowedHosts = ['waydeepak.onrender.com'];

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts,
  },
  preview: {
    allowedHosts,
  },
});
