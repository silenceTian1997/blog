import {
  createRouter,
  createWebHashHistory,
  RouteLocationNormalized,
} from 'vue-router'
import routes from './routes'
import { createDiscreteApi } from 'naive-ui'
const { loadingBar } = createDiscreteApi(['loadingBar'])
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

const verifyRouterFor404 = (toPath: RouteLocationNormalized): boolean => {
  return !toPath.matched.length
}

router.beforeEach((to, _form, next) => {
  loadingBar.start()
  if (verifyRouterFor404(to)) {
    loadingBar.error()
    router.replace('/404')
  }
  next()
})
router.afterEach((from) => {
  document.title = from?.meta?.title ?? ''
  loadingBar.finish()
})
router.onError(() => {
  loadingBar.error()
})

export default router
