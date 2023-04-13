import { createRouter, createWebHistory } from 'vue-router'
import SearchView from '../views/SearchView.vue'
import GamesView from '../views/GamesView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SearchView
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
    }
  ]
})

export default router
