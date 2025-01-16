import { defineConfig } from "vite";
import { federation } from "@module-federation/vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
    minify: false,
  },
  plugins: [
    vue(),
    federation({
      name: "mfe-host",
      filename: "remoteEntry.js",
      exposes: {
        "./greet": "./src/greet.ts",
      },
      remotes: {
        mfe_client: {
          name: "mfe_client",
          entry: "http://localhost:4000/remoteEntry.js",
          type: "module",
        },
      },
    }),
  ],
});
