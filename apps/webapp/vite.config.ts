import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from "vite-tsconfig-paths";
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),tsconfigPaths(),    dts({
    tsconfigPath: 'tsconfig.build.json',
  }),],
  optimizeDeps: {
    include: ['crank-ui']
  },
  build: {
    commonjsOptions: {
      include: [/crank-ui/, /node-modules/]
    }
  }
})
