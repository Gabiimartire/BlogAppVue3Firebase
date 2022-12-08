<script setup>
    import { loginWithGoogle, logout } from '../firebase/auth.js';
</script>
<template>
    <div class="formulario m-auto">
        <router-link to="/perfil"><button @click="loginWithGoogle">Iniciar Sesion con Google</button></router-link>
    </div>
</template>

<style scoped>

</style>