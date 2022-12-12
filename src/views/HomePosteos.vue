<script setup>
    import comments from '../store/comments.js'
    import {deleteComment} from '../firebase/comments.js'
</script>

<template>
    <h1 class="text-center text-white">Post Recientes</h1>
    <div class="cardContainer">
        <div class="card" v-for="comment in comments" :key="comment.id" >
            <h3>Author: {{comment.name}} </h3>
            <div class="cardContent">
                <p> {{comment.message}} </p>
            </div>
            <p class="muted">Mail: {{comment.mail}}</p>
            <button @click.prevent="deleteComment(comment.id)">Delete</button>
        </div>
    </div>
</template>

<style scoped>
</style>