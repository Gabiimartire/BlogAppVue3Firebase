<script setup>
    const props = defineProps({
        comment: {},
        typeof: Object,
    })
</script>

<template>
    
    <div class="postBlogApp mx-3 ">
        <div class="nAiUser d-flex pt-2 px-3" >
            <img
            class="imagenPerfil"
            :src="comment.photo? comment.photo : 'https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg='"
            alt="" />
            <h3 class="nUsuario text-white fw-normal fs-5">{{comment.name}}</h3>
        </div>
            <p class="post text-light p-2">{{comment.text}}</p>
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
</style>