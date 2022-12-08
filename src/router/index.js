import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contact from '../views/Contact.vue'
import Register from '../views/Register.vue'
import Perfil from '../views/Perfil.vue'
import Configuracion from '../views/Configuracion.vue'
import SignIn from '../views/SignIn.vue'
import HomePosts from '../views/HomePosteos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: Perfil
    },
    {
      path: '/configuracion',
      name: 'configuracion',
      component: Configuracion
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/signin',
      name: 'signIn',
      component: SignIn
    },
    {
      path: '/homePosts',
      name: 'homePosts',
      component: HomePosts
    },
  ]
})

export default router
