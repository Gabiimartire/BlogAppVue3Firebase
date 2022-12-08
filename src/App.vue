<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Footer from './components/FooterMenu.vue'
import Nav from './components/Nav.vue' 
import Titulo from './components/Titulo.vue'
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
