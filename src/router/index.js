import { createRouter, createWebHistory } from 'vue-router'
import SearchView from '../views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SearchView
    },
    {
      path: '/details/:id',
      name: 'details',
      component: () => import('../views/DetailsView.vue')
    }
  ]
})

export default router
