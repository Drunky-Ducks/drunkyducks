import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/juegos',
      name: 'juegos',
      component: () => import('../views/GamesView.vue')
    },
    {
      path: '/detalles/:id',
      name: 'details',
      component: () => import('../views/DetailsView.vue')
    },
    {
      path: '/buscador',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('../views/ChatView.vue')
    },
    {
      path: '/formulario',
      name: 'formulario',
      component: () => import('../views/FormView.vue')
    },
    {
      path: '/privacidad',
      name: 'privacidad',
      component: () => import('../views/PrivacityView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/404View.vue')
    }
  ]
})
export default router
