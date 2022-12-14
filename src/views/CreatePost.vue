<script setup>
    import NewPost from '../components/NewPost.vue'
    import user from '../store/profile.js'
</script>

<template>
    <NewPost v-if="user"/>
    <div>
        
    </div>
</template>

<style scoped>
    input, textarea{
        width: 100%;
        height: 5rem;
        margin: auto;
    }
</style>