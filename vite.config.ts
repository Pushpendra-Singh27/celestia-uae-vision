import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  
  return {
    base: isProduction ? '/celestia-uae-vision/' : '/',
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'framer-motion']
          }
        }
      }
    },
    server: {
      port: 3000, // Changed from 8080 to 3000
      host: '0.0.0.0',
      open: true,
      strictPort: true,
      hmr: {
        clientPort: 3000
      }
    },
    preview: {
      port: 3000,
      open: true
    }
  };
});
