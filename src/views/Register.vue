<script setup>
    import { ref } from 'vue'
    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
    import { useRouter } from 'vue-router';
    const email = ref("")
    const password = ref("")
    const router = useRouter()
    const register = () =>{
        createUserWithEmailAndPassword(getAuth(), email.value, password.value)
            .then((data) => {
                console.log("Successfully registered");
                console.log(auth.currentUser)
                router.push('/signin')
            })
            .catch((error) => {
                console.log(error.code);
                alert(error.message);
            })
    }
    const signInWithGoogle = () =>{

    } 
</script> 
<template>
    <div class="formulario m-auto">
        <h2 class="text-center" style="color: var(--primario);">Crear Cuenta</h2>
        <label class="mb-1">Correo Electronico</label>
        <input type="text" placeholder="Cuser123@example.com" v-model="email" >
        <label class="mb-1">Contraseña</label>
        <input class="mb-4" type="password" placeholder="********" v-model="password" >
        <button class="mb-3" @click="register">Crear Cuenta</button>
        <button @click="signInWithGoogle">Crear cuenta con Google</button>
    </div>
</template>
<style scoped>
    input{
        margin-bottom: 2rem;
    }

</style>