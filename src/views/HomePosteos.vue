<script setup>
    import {deleteComment, addComment} from '../firebase/comments.js'
    import Posts from '../components/Posts.vue'
    import user from '../store/profile.js'
    import { computed, ref } from 'vue'
    const name = ref('')
    const email = ref('')
    const message = ref('')
    const updateData = computed(() =>{
        if(user.value){
            console.log(user)
            name.value = user.value.displayName
            email.value = user.value.email
        }
    })
    const posts = ref([
        {
            id: crypto.randomUUID(),
            name: 'Edu',
            photo: null,
            title: 'Hello World',
            message: 'Hello World',
            date: Date.now(),
        },
        {
            id: crypto.randomUUID(),
            name: 'Edu',
            photo: null,
            title: 'Hello World',
            message: 'Hello World',
            date: Date.now(),
        },
        {
            id: crypto.randomUUID(),
            name: 'Edu',
            photo: null,
            title: 'Hello World',
            message: 'Hello World',
            date: Date.now(),
        },
        
    ])
</script>

<template>
    {{updateData}}
    <h1 class="text-center text-white">Post Recientes</h1>
    <Posts v-for="post in posts" :key="post.id" :post="post" />
    
</template>

<style scoped>
</style>