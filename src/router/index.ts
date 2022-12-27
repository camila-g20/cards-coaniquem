import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import EquipoView from '../views/EquipoView.vue';
import LiderView from '../views/LiderView.vue';
import CaptadorView from '../views/CaptadorView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/equipo'
  },
  {
    path: '/equipo',
    name: 'Equipo page',
    component: EquipoView
  },
  {
    path: '/lider',
    name: 'Lider page',
    component: LiderView
  },
  {
    path: '/captador',
    name: 'Captador page',
    component: CaptadorView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
