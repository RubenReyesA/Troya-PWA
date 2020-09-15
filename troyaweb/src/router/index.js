import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Stats from '../views/Stats.vue'
import Classf from '../views/Classf.vue'
import Calendar from '../views/Calendar.vue'
import GPS from '../views/GPS.vue'
import Convocatorias from '../views/Convocatorias.vue'
import PlantillaTeam from '../views/PlantillaTeam.vue'
import Management from '../views/Management.vue'
import LogIN from '../views/LogIn.vue'
import Settings from '../views/Settings.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stats',
    name: 'Stats',
    component: Stats
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/classf',
    name: 'Classf',
    component: Classf
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  },
  {
    path: '/gps',
    name: 'GPS',
    component: GPS
  },
  {
    path: '/convocatorias',
    name: 'Convocatorias',
    component: Convocatorias
  },
  {
    path: '/plantillateam',
    name: 'PlantillaTeam',
    component: PlantillaTeam
  },
  {
    path: '/management',
    name: 'Management',
    component: Management
  },
  {
    path: '/login',
    name: 'LogIN',
    component: LogIN
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
