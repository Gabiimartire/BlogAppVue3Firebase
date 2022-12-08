<script setup>
import user from '../store/profile'
import {logout} from '../firebase/auth'
</script>
<template>
    <label for="btn-nav" class="btn-nav">☰</label>
    <input type="checkbox" id="btn-nav">
    
    
    <nav>
        <ul class="navigation">
            <RouterLink to="/"><h2 class="navH2 my-2">BlogApp</h2></RouterLink>
            <li class="text-center"><a href="">Sobre Nosotros</a></li>
            <li class="text-center"><RouterLink to="/contact">Contactanos</RouterLink></li>
            <li class="text-center"><a href="">Reglas y Politicas</a></li>
        </ul>
        <ul class="d-flex align-items-center justify-content-center flex-column">
            <router-link v-if="!user" to="/register"><button class="fs-4 pb-1 text-center">Register</button></router-link>
            <p v-if="!user" class="text-center fs-4 text-white o my-2">O</p>
            <router-link v-if="!user" to="/signin"><button class="fs-4 pb-1 text-center">Sign In</button></router-link>
            <router-link class="" v-if="user" @click="logout" to="/"><button class="mt-5">LogOut</button></router-link>
        </ul>
    </nav>
</template>
<style scoped>
    button{
        width: 100%;
        border-bottom: 1px solid rgba(255,255,255,.5);
        background: #212D40;
        color: white;
        border-radius: 10px;
        border: 0;
        width: 5.5rem;
        height: 2.4rem; 
        margin-right: 2rem;

    }
    .navigation, .o{
        margin-right: 2rem;
    }

</style>