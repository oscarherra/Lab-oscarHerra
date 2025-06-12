import { createRouter, createWebHistory } from 'vue-router'
import ProyectosView from '@/views/ProyectosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        {
      path: '/',
      name: 'main',
      component: () => import('../layouts/ProyectsLayout.vue'),
      children: [
        {
          path: '/proyectos',
          name: 'proyectos',
          component: ProyectosView,
        },
      ]

    },
  ],
})

export default router
