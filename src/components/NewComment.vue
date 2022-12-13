<script setup>
    
</script>
<template>
    <div class="comentarios my-3">
        <input class="mx-3" type="text" placeholder="Hacer un comentario">
        <button class="createComment"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/>
        </svg></button>
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
</style>