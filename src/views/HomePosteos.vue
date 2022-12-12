<script setup>
    import comments from '../store/comments.js'
    import {deleteComment} from '../firebase/comments.js'
    import Post2 from '../components/Post2.vue'
</script>

<template>
    <h1 class="text-center text-white">Post Recientes</h1>
    <Post2 v-for="comment in comments" :key="comment.id" :comment="comment" />
</template>

<style scoped>
</style>