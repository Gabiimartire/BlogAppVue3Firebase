import { app } from './firebase.js'
import { collection, addDoc, doc, deleteDoc, onSnapshot, getFirestore} from 'firebase/firestore'
import { posts } from '../store/PostStore.js'
const db = getFirestore(app)
const postRef = collection(db, 'posts')

const addPost = (post) => {
    addDoc(postRef, post)
}
const getPosts = () => {
    onSnapshot(postRef, (snapshot) => {
        posts.value = []
        snapshot.forEach(doc => {
            let newPost = {
                id: doc.id,
                date: doc.data().date,
                name: doc.data().name,
                email: doc.data().email,
                message: doc.data().message,
                photo: doc.data().photo,
            }
            posts.value.push(newPost)
        })
    })
}


export { addPost, getPosts }