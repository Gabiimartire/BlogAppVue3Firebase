<script setup>
    import comments from '../store/comments.js'
    import {deleteComment} from '../firebase/comments.js'
    import Posts from '../components/Posts.vue'
</script>

<template>
    <h1 class="text-center text-white">Post Recientes</h1>
    <Posts v-for="comment in comments" :key="comment.id" :comment="comment" />
</template>

<style scoped>
</style>