<script setup>
    import { loginWithGoogle, logout } from '../firebase/auth.js';
    import  user  from '../store/profile.js'
</script>
<template>
    <div class="formulario m-auto">
        <router-link class="text-center" to="/perfil"><button class="btn-primary btn" @click="loginWithGoogle">Iniciar Sesion con Google</button></router-link>
    </div>
</template>

<style scoped>

</style> 