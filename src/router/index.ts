import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/teleport',
      name: 'teleport',
      component: () => import('../views/TeleportView.vue')
    },
    {
      path: '/ref-reactive',
      name: 'ref-reactive',
      component: () => import('../views/RefReactiveView.vue')
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import('../views/ComputedView.vue')
    },
    {
      path: '/watch',
      name: 'watch',
      component: () => import('../views/WatchView.vue')
    },
    {
      path: '/component-reusable',
      name: 'component-reusable',
      component: () => import('../views/ComponentReusableView.vue')
    },
    {
      path: '/hoc',
      name: 'hoc',
      component: () => import('../views/HOCView.vue')
    }
  ]
})

export default router
