import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {fileURLToPath} from 'url';
import {defineConfig} from 'vite';

const rootDir = import.meta.dirname ?? path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(rootDir, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(rootDir, 'index.html'),
          about: path.resolve(rootDir, 'about.html'),
          contact: path.resolve(rootDir, 'contact.html'),
          privacy: path.resolve(rootDir, 'privacy.html'),
          terms: path.resolve(rootDir, 'terms.html'),
          disclaimer: path.resolve(rootDir, 'disclaimer.html'),
          compress: path.resolve(rootDir, 'tool-compress-pdf.html'),
          merge: path.resolve(rootDir, 'tool-merge-pdf.html'),
          split: path.resolve(rootDir, 'tool-split-pdf.html'),
          edit: path.resolve(rootDir, 'tool-edit-pdf.html'),
          imageToPdf: path.resolve(rootDir, 'tool-image-to-pdf.html'),
          pdfToImage: path.resolve(rootDir, 'tool-pdf-to-image.html'),
          ocr: path.resolve(rootDir, 'tool-ocr-pdf.html'),
          watermark: path.resolve(rootDir, 'tool-watermark-pdf.html'),
          admin: path.resolve(rootDir, 'admin.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
