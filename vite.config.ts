import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

/* eslint import/no-default-export: 0 */
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    open: true
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests',
    mockReset: true
  }
});
