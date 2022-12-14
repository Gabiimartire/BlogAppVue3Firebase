import { ref } from 'vue'

const posts = ref([
    {
        id: 1,
        name: 'Edu',
        photo: null,
        message: 'Helloooooooo World',
        date: Date.now(),
    },
    {
        id: 2,
        name: 'Edu',
        photo: null,
        message: 'Hellouuuu World',
        date: Date.now(),
    },
    {
        id: 3,
        name: 'Edu',
        photo: null,
        message: 'Hello World',
        date: Date.now(),
    },
])
const comments = ref([
    {
        id: 1,
        postId: 2,
        photo: null,
        name: 'Ivan',
        message: 'comentario Random',
        date: Date.now(),
    },
    {
        id: 2,
        postId: 2,
        photo: null,
        name: 'Ivan',
        message: 'comentariossssss Random',
        date: Date.now(),
    },
    {
        id: 3,
        postId: 1,
        photo: null,
        name: 'Ivan',
        message: 'comentario Randomnazo',
        date: Date.now(),
    },
    {
        id: 4,
        postId: 1,
        photo: null,
        name: 'Ivan',
        message: 'comentariodasda Rando3333zo',
        date: Date.now(),
    },
    {
        id: 5,
        postId: 1,
        photo: null,
        name: 'Ivan',
        message: 'comentario Randomn123121azo',
        date: Date.now(),
    },
])
export {posts, comments }