<script setup>
    import NewPost from '../components/NewPost.vue'
    import user from '../store/profile.js'
</script>

<template>
    <NewPost v-if="user"/>
    <div v-if="!user" class="formulario m-auto">
        <form>
            <div class="m-auto">
                <div class="nYf d-flex align-items-center justify-content-center gap-2 flex-column">
                    <img src="https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg="  class="fotoPerfil d-flex justify-content-center align-items-center">
                    <h2 class="fs-5 img mb-5">noUserName</h2>
                </div>
                <textarea  readonly required placeholder="Inicie sesion para poder crear su post"></textarea>
            </div>
        </form>
    </div>
</template>

<style scoped>
    input, textarea{
        width: 100%;
        height: 5rem;
        margin: auto;
    }
    button{
        border-radius: 10px;
        border: none;
        color: white;
        background-color: var(--terciario);
        height: 3rem;
        font-weight: bold;
    }
    label{
        font-weight: medium;
        color: var(--terciario);
    }
    span{
        font-weight: 700;
        color: var(--terciario);
    }
    ::placeholder{
        text-align: center;
        padding: 1rem;
    }
    img{
        border-radius: 50% !important;
        width:8rem;
    }

</style>