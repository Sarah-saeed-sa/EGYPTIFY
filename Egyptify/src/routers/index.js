import { createRouter, createWebHistory } from 'vue-router'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Home from '../Pages/home.vue'

import Login from '../Pages/auth/login.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
