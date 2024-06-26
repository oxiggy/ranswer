import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    remix({
      ssr: false,
      appDirectory: "src",
    }),
    tsconfigPaths(),
    svgr(),
  ],
});
