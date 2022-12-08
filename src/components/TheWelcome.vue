<script setup>  
import Comment from './icons/CommentB.vue';
import Favourite from './icons/FavouriteB.vue';
import Share from './icons/ShareB.vue';

</script>

<template>

    <div class="d-flex align-items-center justify-content-center">
      <h2 class="border-bottom text-center text-white pb-2">
        Bienvenidos a <span class="span1">BlogApp</span>
      </h2>
    </div>
    <div class="justify-content-center m-auto" style="width: 20rem">
      <p class="text-white fs-4 text-center p-presentacion border-bottom pb-3">
        <span class="span1">BlogApp</span> permite que los grupos de amigos, familiares y
        compañeros de trabajo se comuniquen y estén en contacto a través de mensajes rápidos
        y frecuentes. Las personas publican lo que piensan, que pueden contener fotos,
        videos, enlaces y texto.
      </p>
    </div>
    <div class="d-flex justify-content-center">
      <h3 class="text-white fw- fs-5 text-center border-bottom pb-2">
        Post con mas favoritos
      </h3>
    </div>

    <!-- post -->
    <div class="postBlogApp mx-4">
      <div class="nAiUser d-flex pt-2 px-3">
        <img
          class="imagenPerfil"
          src="https://elcomercio.pe/resizer/pfVziOV4X8Vu9nwknDc-oNItlB8=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6Y2EDIISGFGVFANEVDCR5LCG34.jpg"
          alt=""
        />
        <h3 class="nUsuario text-white fw-normal fs-5">Goku LeGana</h3>
      </div>
      <p class="post text-light p-2">
        Alguien tiene el video donde me transformo en ssj3? Se lo quiero mostrar a vegeta
      </p>
      <div class="botones-interaccion my-3">
        <Favourite class="botones" />
        <Comment class="botones"/>
        <Share class="botones"/>
      </div>
    </div>
    <!-- post -->
    <div class="postBlogApp mx-4">
      <div class="nAiUser d-flex pt-2 px-3">
        <img
          class="imagenPerfil"
          src="https://elcomercio.pe/resizer/pfVziOV4X8Vu9nwknDc-oNItlB8=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6Y2EDIISGFGVFANEVDCR5LCG34.jpg"
          alt=""
        />
        <h3 class="nUsuario text-white fw-normal fs-5">Goku LeGana</h3>
      </div>
      <p class="post text-light p-2">
        Alguien tiene el video donde me transformo en ssj3? Se lo quiero mostrar a vegeta
      </p>
      <div class="botones-interaccion my-3">
        <Favourite class="botones" />
        <Comment class="botones"/>
        <Share class="botones"/>
      </div>
    </div>
    <div class="postBlogApp mx-4">
      <div class="nAiUser d-flex pt-2 px-3">
        <img
          class="imagenPerfil"
          src="https://elcomercio.pe/resizer/pfVziOV4X8Vu9nwknDc-oNItlB8=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6Y2EDIISGFGVFANEVDCR5LCG34.jpg"
          alt=""
        />
        <h3 class="nUsuario text-white fw-normal fs-5">Goku LeGana</h3>
      </div>
      <p class="post text-light p-2">
        Alguien tiene el video donde me transformo en ssj3? Se lo quiero mostrar a vegeta
      </p>
      <div class="botones-interaccion my-3">
        <Favourite class="botones" />
        <Comment class="botones"/>
        <Share class="botones"/>
      </div>
    </div>

</template>

<style scoped>
.p-presentacion {
  line-height: 1.4rem;
}
.span1 {
  font-weight: bold;
  color: #d66853;
}
</style>
