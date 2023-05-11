import { RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[] = [
    {
        path:'',
        redirect:'/home'
    },
    {
        name:'home',
        path:'/home',
        meta:{
            title:'主页',
            isKeepAlive:true,
        },
        component:()=>import('../views/home/index.vue')
    },
    {
        name:'about',
        path:'/about',
        meta:{
            title:'关于',
            isKeepAlive:true,
        },
        component:()=>import('../views/about/index.vue')
    },
]

export default routes