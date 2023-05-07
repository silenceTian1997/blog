import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from 'path'
// https://vitejs.dev/config/
export default ({mode , command })=>{
  return defineConfig({
    plugins: [vue()],
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
        "@": resolve(__dirname, "./src"), // 设置为@ 则使用时为 "@/components/index.module.css"
        "@components": resolve(__dirname, "./src/components"), // 使用时为 "@components/HelloWorld.vue"
      },
    },
    server:{
      proxy:{
        '/api':{
          // target:'',
          // rewrite
          // changeOrigin
        }
      },
      port:8080
    }
  });
}
