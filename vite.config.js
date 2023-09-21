import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
// 引入@vitejs/plugin-legacy
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    vue(),
  ],
  server: {
    host: "0.0.0.0",
  },
  base: "./",
  build: {
    outDir: "E:/UE4/GHFA_Windows/ZH/UI", // 打包路径
  },
  resolve: {
    alias: [
      //配置别名
      { find: "@", replacement: resolve(__dirname, "src") },
    ],
  },
});
