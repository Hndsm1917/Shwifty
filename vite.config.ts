import { type ConfigEnv, type UserConfigExport, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

import path from 'path'

export default ({ mode }: ConfigEnv): UserConfigExport => {
  const viteEnv = loadEnv(mode, process.cwd()) as ImportMetaEnv
  const { BASE_URL, VITE_SERVER_URL } = viteEnv

  return {
    plugins: [
      vue(),
      svgLoader({
        svgo: false
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    server: {
      port: 3000,
      proxy: {
        '/call/client/': VITE_SERVER_URL,
        '/p24api': {
          target: 'https://api.privatbank.ua',
          changeOrigin: true,
          secure: false
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use \'sass:math\'; @use "@/assets/scss/utils" as *;'
        }
      }
    },
    base: BASE_URL
  }
}
