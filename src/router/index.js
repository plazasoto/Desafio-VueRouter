import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/productos',
    name: 'productos',
    component: () => import('../views/ProductsView.vue'),
    props: () => {
      return {
        nombre: "Producto",
        descripcion: "El producto",
        precio: "$_.___",
        cantidad: "Para _ personas",
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
