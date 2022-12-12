<script setup>
    import Comment from './icons/CommentB.vue';
    import Favourite from './icons/FavouriteB.vue';
    import Share from './icons/ShareB.vue';
    import user from '../store/profile.js'
    const newUserName = 'No User Name'
</script>
<template>
    <h2 class="text-center text-white fs-1 my-4">Tus Posts</h2>
    <div class="postBlogApp mx-3 ">
        <div class="nAiUser d-flex pt-2 px-3">
            <img
            class="imagenPerfil"
            :src="user ? user.photoURL : 'https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg='"
            alt="" />
            <h3 class="nUsuario text-white fw-normal fs-5">{{user? user.displayName : newUserName}}</h3>
        </div>
            <p class="post text-light p-2">¡Oy! Me Enojé</p>
        <div class="botones-interaccion mx-2 my-3">
            <Favourite class="botones" />
            <Comment class="botoness" />
            <Share class="botoness" />
        </div>
    </div>
</template>
<style scoped>
    .nAiUser{
        display: flex;
    }
    .nUsuario{
        margin-top: .3rem;
    }
    .postBlogApp{
        min-height: 2rem;
        border: 1px solid rgba(255, 255, 255, .1);
        border-radius: 6px;
        margin-bottom: 1rem !important;
    }
    .post{
        border-bottom: 1px solid #D66853;
    }
    .botones-interaccion{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .botones{
        margin: auto;
        width: 1.2rem;
        height: 1.2rem;
    }
    .botoness{
        margin: auto;
        width: 1rem;
        height: 1rem;
    }
    .botoness:hover{
        color: var(--terciario) !important;
    }
    .botones:hover{
        color: var(--terciario) !important;
    }
</style>