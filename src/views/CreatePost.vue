<script setup>
    import { addComment } from '../firebase/comments.js'
    import { ref } from 'vue'   
    const name = ref('')
    const email = ref('')
    const message = ref('')
    const comments = ref([
    ])

    const addNewComment = () => {
        addComment({
            id: crypto.randomUUID(),
            name: name.value,
            email: email.value,
            message: message.value,
        })
    }
</script>

<template>
    <h1 class="text-center text-white">Crea tu post</h1>
    <form >
        <div class="formulario m-auto">
            <input v-model="name" type="text" placeholder="Name" />
            <input v-model="email" type="text" placeholder="Email" />
            <textarea v-model="message" placeholder="Comment" @keyup.enter="addNewComment"></textarea>
            <button @click.prevent="addNewComment">Submit</button>
        </div>
    </form>
</template>

<style scoped>
    input, textarea{
        width: 100%;
        height: 5rem;
        margin: auto;
    }
</style>