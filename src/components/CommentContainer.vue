<script setup>
import { ref, computed, onMounted } from 'vue'
import CommentPost from '../components/CommentPost.vue'
import { comments } from '../store/PostStore.js'
const commentsWithId = ref([])
const props = defineProps({
    comments: [],
    postId: 0,
    typeOf: Number,
})
const waitComment = computed(() => {
    commentsWithId.value = comments.value.filter(comment => comment.postId === props.postId)
})


</script>
<template>
    {{ waitComment }}
    <CommentPost v-for="comment in commentsWithId" :comment="comment" :key="comment.id" />
</template> 