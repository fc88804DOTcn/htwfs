import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    proxy: {
      // 麻昭高速默认API接口
      '/mazhaoDefaultApi': {
        target: 'http://175.27.163.52:8095',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mazhaoDefaultApi/, '')
      }
    }
  }
})
