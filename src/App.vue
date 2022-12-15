<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { onMounted } from 'vue';
import Footer from './components/FooterMenu.vue'
import Nav from './components/Nav.vue' 
import Titulo from './components/Titulo.vue'
import user from './store/profile.js'

onMounted(()=>{
  let localUser = JSON.parse(localStorage.getItem('user'))
  if(localUser){
    user.value = {
      ...localUser
    }
  }
})
</script>

<template>
  <Titulo class="mt-1 mb-5"/>
  <header class="header d-flex flex-wrap">
    <Nav />
  </header>
  <footer>
    <Footer />
  </footer>
    
  <RouterView />
</template>

<style scoped>

</style>
