import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    // Points Rsbuild to our high-end, SEO-optimized template
    template: './public/index.html', 
    favicon: './public/favicon/favicon.ico',
  },
  source: {
    // Sets up enterprise path aliases (e.g., import X from '@/components/X')
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    historyApiFallback: true, // Crucial for React Router deep linking to work locally
  },
  performance: {
    chunkSplit: {
      strategy: 'split-by-experience', // Optimizes code-splitting for vendor chunks (React, Zod)
    },
  },
});