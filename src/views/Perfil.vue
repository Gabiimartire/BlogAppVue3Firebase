<script setup>
    import Posts from '../components/Posts.vue'
    import user from '../store/profile.js'
    import { posts } from '../store/PostStore.js'
    import {  ref, computed } from 'vue'
    const newUserName = 'No user Name'

    const myPosts = ref([])

    const updateMyPosts = computed(()=>{
    if(user.value){
        myPosts.value = posts.value.filter(element => element.email === user.value.email) 
    }
})
</script>
<template>
    {{updateMyPosts}}
    <div>
        <router-link to="/configuracion"><img class="settings" src="../assets/settings.svg" alt=""></router-link>
    </div>
    <div class="perfil">
        <div class="nYf d-flex align-items-center justify-content-center gap-2 flex-column">
            <img :src="user? user.photoURL : 'https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg='"  class="fotoPerfil d-flex justify-content-center align-items-center" />
            <h2 class="fs-5 ">{{user? user.displayName : newUserName}}</h2>
        </div>
        <h2 class="text-center text-white fs-1 my-4">Tus Posts</h2>
        <div class="mt-2">
            <Posts v-for="post in myPosts" :key="post.id" :post="post" />
        </div>
    </div>
</template>
<style scoped>
    .perfil{
        margin: auto;
    }
    .nYf{
        margin: auto;
        margin-bottom: 1rem;
    }
    
    .fotoPerfil{
        width: 5.4rem;
        border-radius: 60%;

    }
    h2{
        color: white;
        padding-right: 10px;
        
    }
    .settings{
        width: 1.9rem;
        right: 0 !important;
        top: 0;
        position: absolute;
        margin-top: 1.2rem;
        margin-right: 1rem ;
    }

</style>