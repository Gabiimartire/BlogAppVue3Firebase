<script setup>
    import { ref } from 'vue'
    import CommentPost from '../components/CommentPost.vue'
    import { comments } from '../store/PostStore.js'
    const props = defineProps({
        comments: [],
        postId: 0,
        typeOf: Number,
    })
    const commentsWithId = ref(comments.value.filter(comment => comment.postId === props.postId))
</script>
<template>
    <CommentPost v-for="comment in commentsWithId" :comment="comment" :key="comment.id" />
</template> 