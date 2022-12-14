<script setup>
    import Comment from './icons/CommentB.vue';
    import Favourite from './icons/FavouriteB.vue';
    import Share from './icons/ShareB.vue';
    // FIN DE ICONOS

    import NewComment from './NewComment.vue';
    import CommentContainer from './CommentContainer.vue'
    import user from '../store/profile.js'

    const props = defineProps({
        post: {},
        typeof: Object
    })  
    
</script>
<template>
    <div class="postBlogApp mx-3 ">
        <div class="nAiUser d-flex pt-2 px-3" >
            <img
            class="imagenPerfil"
            :src="post.photo? post.photo : 'https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg='"
            alt="" />
            <h3 class="nUsuario text-white fw-normal fs-5">{{post.name}}</h3>
        </div>
            <p class="post text-light p-2">{{ post.message }}</p>
        <div class="botones-interaccion mx-2 my-3">
            <Favourite class="botones" />
            <Comment class="botoness" />
            <Share class="botoness" />
        </div>
        <CommentContainer  :postId="post.id"/>
        <NewComment v-if="user" :postId="post.id"/>
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