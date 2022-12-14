<script setup>
    import user from '../store/profile.js'
    import {logout}  from '../firebase/auth.js';
    const newUserName = ''
    
</script>
<template>
    <div>
        <router-link to="/configuracion"><img class="settings" src="../assets/settingsIn.svg" alt=""></router-link>
    </div>
    <div class="contenedorConfig">
        
        <div class="nYf d-flex align-items-center justify-content-center gap-2 flex-column">
            <img class="fotoPerfil d-flex justify-content-center align-items-center" :src="user ? user.photoURL : 'https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg='" >
            <h2 class="fs-4 fw-light">{{user? user.displayName : newUserName}}</h2>
            <p>Cambiar Foto de Perfil</p>
        </div>
        <div class="d-flex flex-column text-center formC"> 
            <form class="d-flex flex-column" action="">
                <label placeholder="Nuevo nombre de usuario" class="fs-5 mb-2 text-center" >
                    Nombre de Usuario
                </label>
                <input v-model="newUserName" type="text" maxlength="10">
                <label class="fs-5 mb-2 text-center">
                    Contraseña
                </label>
                <input type="text">
                <label class="fs-5 mb-2 text-center">Correo Electronico</label>
                <input type="text">
                <label class="fs-5 mb-2 text-center">Genero</label>
                <select name="" id="">
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                    <option value="Hombre">Otro</option>
                    <option value="Hombre">Prefiero no decirlo</option>
                </select>
                <button>Guardar Cambios</button>
                <router-link class="text-center align-items-center py-0" v-if="user" @click="logout" to="/"><button></button>LogOut</router-link>
            </form>
        </div>

    </div>
</template>
<style scoped>
.settings{
    width: 1.9rem;
    right: 0 !important;
    top: 0;
    position: absolute;
    margin-top: 1.2rem;
    margin-right: 1rem ;
}
.contenedorConfig{
    margin: auto;
}

.fotoPerfil{
    width: 5.4rem;
    border-radius: 60%;
}
h2{
    color: white;
}
p{
    cursor: pointer;
    color: var(--primario);
}
label{
    color: var(--terciario);
}
input, select{
    border-radius: 10px;
    border: 0;
    background: var(--post);
    color: white;
    width: 14rem;
    height: 2rem;
}
.formC{
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
button, a{
    background: var(--primario) !important;
    margin-top: 2rem;
    border: 0;
    border-radius: 10px;
    text-decoration: none;
    text-align: center;
    color: black;

}
</style>
