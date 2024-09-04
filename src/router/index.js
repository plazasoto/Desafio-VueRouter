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
        nombre: "Desayunos",
        descripcion: "Contamos con desayunos nutritivos y deliciosos.",
        precio: "2000",
        cantidad: "Para 2 personas",
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
