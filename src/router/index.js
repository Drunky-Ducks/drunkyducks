import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import GamesView from '../views/GamesView.vue'
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
      component: GamesView
    },
    {
      path: '/details/:id',
      name: 'details',
      component: () => import('../views/DetailsView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/FormView.vue')
    }
  ]
})
export default router
