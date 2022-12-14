<script setup>
    import {deleteComment, addComment, comments} from '../firebase/comments.js'
    import Posts from '../components/Posts.vue'
    import user from '../store/profile.js'
    import { computed, ref } from 'vue'
    import { posts } from '../store/PostStore.js'

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
    const addNewComment = () => {
        addComment({
            id: crypto.randomUUID(),
            date: Date.now(),
            name: name.value,
            email: email.value,
            message: message.value
        })
        message.value = ''
    }
</script>

<template>
    {{updateData}}
    <h1 class="text-center text-white">Post Recientes</h1>
    <Posts v-for="post in posts" :key="post.id" :post="post" />
    
</template>

<style scoped>
</style>