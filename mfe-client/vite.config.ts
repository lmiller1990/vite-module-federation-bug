import { defineConfig } from "vite";
import { federation } from "@module-federation/vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  server: {
    port: 4000,
  },
  build: {
    target: "esnext",
    minify: false,
  },
  plugins: [
    vue(),
    federation({
      name: "mfe_client",
      filename: "remoteEntry.js",
      exposes: {
        "./place": "./src/place.ts",
      },
      remotes: {
        mfe_host: {
          name: "mfe_host",
          entry: "http://localhost:3000/remoteEntry.js",
          type: "module",
        },
      },
    }),
  ],
});
