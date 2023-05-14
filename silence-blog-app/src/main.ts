import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import '@/assets/scss/index.scss'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

const app =createApp(App)
app.use(router)
app.mount('#app')
