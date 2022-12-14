<script setup>
    import Posts from '../components/Posts.vue'
    import { posts } from '../store/PostStore.js'
    import { getPosts } from '../firebase/posts.js'
    import { getComments } from '../firebase/comments.js'
    import { onMounted } from 'vue'

    
    onMounted(() => {
        getPosts()
        getComments()
    })

</script>

<template>
    
    <h1 class="text-center text-white">Post Recientes</h1>
    <Posts v-for="post in posts" :post="post" :key="post.id"  />
    
</template>

<style scoped>
</style>