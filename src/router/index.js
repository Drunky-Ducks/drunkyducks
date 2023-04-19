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
      path: '/detalles/:id',
      name: 'details',
      component: () => import('../views/DetailsView.vue')
    },{
      path: '/busqueda',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },{
      path: '/chat',
      name: 'chat',
      component: () => import('../views/ChatView.vue')
    }
  ]
})
export default router
