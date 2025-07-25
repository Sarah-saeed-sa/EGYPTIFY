import { createRouter, createWebHistory } from 'vue-router'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Home from '../Pages/home.vue'
import Login from '../Pages/auth/login.vue'
import Hala from '../Pages/Hala.vue'
   
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  {
    path: '/Hala',
    name: 'Hala',
    component: Hala
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
