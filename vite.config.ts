import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig, type PluginOption } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
import { compression } from "vite-plugin-compression2";
// import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      filename: "dist/stats.html",
      gzipSize: true,
      brotliSize: true,
    }) as PluginOption,
    compression({algorithm:"gzip"}),
    // viteImagemin({
    //   // 无损压缩配置，无损压缩下图片质量不会变差
    //   optipng: {
    //     optimizationLevel: 7
    //   },
    //   // 有损压缩配置，有损压缩下图片质量可能会变差
    //   pngquant: {
    //     quality: [0.8, 0.9],
    //   },
    //   // svg 优化
    //   svgo: {
    //     plugins: [
    //       {
    //         name: 'removeViewBox'
    //       },
    //       {
    //         name: 'removeEmptyAttrs',
    //         active: false
    //       }
    //     ]
    //   }
    // })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
