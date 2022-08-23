import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/dashboard'

const routes = [
  // {
  //   path: '/',
  //   name: 'Login',
  //   component: () => import("@/view/login/Login.vue"),
  // },
  {
    path: '/',
    // path: '/index',
    name: 'Index',
    component: () => import("@/layout/Index.vue"),
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Layout,
      },
      {
        path: '/region',
        name: 'Region',
        component: () => import("@/view/region/Index"),
      },
      {
        path: '/repair',
        name: 'Repair',
        component: () => import("@/view/repair/Index"),
      },
      {
        path: '/receiver',
        name: 'Receiver',
        component: () => import("@/view/receiver/Index"),
      },
      {
        path: '/checker',
        name: 'Checker',
        component: () => import("@/view/checker/Index"),
      },
      {
        path: '/material',
        name: 'Material',
        component: () => import("@/view/material/Index"),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export { router }
