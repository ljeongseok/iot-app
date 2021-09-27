import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: () => import('../views/About.vue')},
  {path: '/mqtt', name: 'Mqtt', component: ()=>import('../views/Mqtt.vue')},
  {path: '/securecamera', name: 'SecureCamera', 
    component: ()=>import('../views/SecureCamera.vue')},
  {path: '/explorationcar', name: 'ExplorationCar', 
    component: ()=>import('../views/ExplorationCar.vue')},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
