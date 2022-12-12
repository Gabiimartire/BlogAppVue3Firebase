<script setup>
    import Comment from './icons/CommentB.vue';
    import Favourite from './icons/FavouriteB.vue';
    import Share from './icons/ShareB.vue';
    import user from '../store/profile.js'
    import CommentPost from '../components/CommentPost.vue'
    const newUserName = 'No User Name'
    const props = defineProps({
        comment:{
            type: Object,
            required: true
        }
    })
</script>
<template>
    <div class="postBlogApp mx-3 ">
        <div class="nAiUser d-flex pt-2 px-3" :key="comment.id">
            <img
            class="imagenPerfil"
            :src="user ? user.photoURL : 'https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg='"
            alt="" />
            <h3 class="nUsuario text-white fw-normal fs-5">{{ comment.name}}</h3>
        </div>
            <p class="post text-light p-2">{{comment.message}}</p>
        <div class="botones-interaccion mx-2 my-3">
            <Favourite class="botones" />
            <Comment class="botoness" />
            <Share class="botoness" />
        </div>
        <div class="comentarios my-3">
            <input class="mx-3" type="text" placeholder="Hacer un comentario">
            <button class="createComment"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/>
            </svg></button>
        </div>
        <CommentPost v-for="comment in comments" :comment="comment" :key="comment.id"/>
    </div>
</template>
<style scoped>
    .createComment{
        border-radius: 50%;
        width: 2.5rem;
        height: 2.5rem;
        color: white;
        background-color: var(--terciario);
        border: none;
    }
    .comentarios{
        display: flex;
    }
    ::placeholder{color: white; text-align: center; opacity: 70%;}
    input{
        border: none;
        background-color: var(--terciario);
        border-radius: 15px;
        width: 75%;
        
    }
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
        cursor: pointer;
    }
    .botoness{
        margin: auto;
        width: 1rem;
        height: 1rem;
        cursor: pointer;
    }
    .botoness:hover{
        color: var(--terciario) !important;
    }
    .botones:hover{
        color: var(--terciario) !important;
    }
</style>