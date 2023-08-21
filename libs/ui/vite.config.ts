import * as path from 'path'
import vue from "@vitejs/plugin-vue";
import {defineConfig} from "vite";
import customTsConfigPlugin from "vite-plugin-custom-tsconfig";

export default defineConfig({
  plugins: [
    vue(),
    customTsConfigPlugin()
  ],
  build: {
    lib: {
      // src/indext.ts is where we have exported the component(s)
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "CrankUi",
      // the name of the output files when the build is run
      fileName: "crank-ui",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})