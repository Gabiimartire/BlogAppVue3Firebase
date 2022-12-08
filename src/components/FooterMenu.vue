<template>
    <div class="d-flex menuF lista align-items-center justify-content-center">
        <div class="d-flex flex-wrap optionFooter align-items-center justify-content-center">
            <img class="iconF" src="../assets/hogar.svg" alt="">
            <router-link style="text-decoration: none; color: var(--primario);" to="/homePosts">Home</router-link>
        </div>
        <div class="d-flex flex-wrap optionFooter align-items-center justify-content-center">
            <img class="iconF" src="../assets/plus.svg" alt="">
            <router-link style="text-decoration: none; color: var(--primario);" to="/">New Post</router-link>
        </div>
        <div class="d-flex flex-wrap optionFooter align-items-center justify-content-center">
            <img class="iconF" src="../assets/usuario.svg" alt="">
            <router-link style="text-decoration: none; color: var(--primario); " to="/perfil">Profile</router-link>
        </div>
    </div>
</template>