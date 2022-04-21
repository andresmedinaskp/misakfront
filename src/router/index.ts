import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EL from '../views/EL.vue'
import EL_Editar from '../views/EL_Editar.vue'
import EL_Crear from '../views/EL_Crear.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/el',
    name: 'EL',
    component: EL
  },
  {
    path: '/el_editar/:id',
    name: 'EL_Editar',
    component: EL_Editar
  },
  {
    path: '/el_crear',
    name: 'EL_Crear',
    component: EL_Crear
  }
  
]

const router = new VueRouter({
  routes
})

export default router
