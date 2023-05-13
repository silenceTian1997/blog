import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
export default ({ mode, command }) => {
  return defineConfig({
    plugins: [
      vue(),
      vueSetupExtend(),
      AutoImport({
        imports: [
          'vue',
          {
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar',
            ],
          },
        ],
      }),
      Components({
        resolvers: [NaiveUiResolver()],
      }),
    ],
    css: {
      preprocessorOptions: {
        // 导入scss预编译程序
        scss: {
          additionalData: `@import '@/assets/scss/mixin.scss';`,
        },
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'), // 设置为@ 则使用时为 "@/components/index.module.css"
        '@components': resolve(__dirname, './src/components'), // 使用时为 "@components/HelloWorld.vue"
      },
    },
    server: {
      proxy: {
        '/api': {
          // target:'',
          // rewrite
          // changeOrigin
        },
      },
      port: 8080,
    },
  })
}
