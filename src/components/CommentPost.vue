<script setup>
   const props = defineProps({
    comment: {},
    typeof: Object,
   })
</script>

<template>
    <div>
        <p>{{comment.texto}}</p>
        <p>{{comment.autor}}</p>
    </div>
</template>

<style scoped>
</style>