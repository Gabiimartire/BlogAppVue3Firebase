<script setup>
    import { ref, computed} from 'vue'   
    import { addPost } from '../firebase/posts.js'
    import user from '../store/profile.js'
    
    
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
    
    const addNewPost = () => {
        let newPost = {
            id: crypto.randomUUID(),
            name: name.value,
            date: Date.now(),
            email: email.value,
            message: message.value,
            photo: user.value.photoURL,
        }
        addPost(newPost)
        message.value = ''
    }
</script>

<template>
    {{updateData}}
    <h1 class="text-center text-white">Crea tu post</h1>
    <form>
        <div class="formulario m-auto">
            <input v-model="name" type="text" placeholder="Name" />
            <textarea @keyup.enter="addNewPost" v-model="message" placeholder="Comment"></textarea>
            <button @click.prevent="addNewPost">Submit</button>
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