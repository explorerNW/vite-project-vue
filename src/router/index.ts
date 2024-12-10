import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

import { useUserInfo } from '@/stores'

type Auth = {
  requireAuth: {
    permissions: string[]
    login: boolean
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requireAuth: { permissions: ['admin'] } },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: { requireAuth: { permissions: [] } },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/loginView.vue'),
    },
    {
      path: '/403',
      name: '403',
      component: () => import('../views/403View.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  const { userInfo } = useUserInfo()
  const meta = to.meta as Auth
  if (meta.requireAuth) {
    if (userInfo.login) {
      if (
        !meta.requireAuth.permissions?.length ||
        meta.requireAuth.permissions.some((permission) => userInfo.permissions.includes(permission))
      ) {
        next()
      } else {
        next({ path: '/403' })
      }
    } else {
      next({ path: '/login' })
    }
  } else {
    next()
  }
})

export default router
