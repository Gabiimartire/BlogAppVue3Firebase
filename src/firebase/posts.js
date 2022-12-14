import { app } from './firebase.js'
import { collection, addDoc, doc, deleteDoc, onSnapshot, getFirestore} from 'firebase/firestore'
import { posts } from '../store/PostStore.js'
const db = getFirestore(app)
const postRef = collection(db, 'posts')

const addPost = (post) => {
    addDoc(postRef, post)
}
const getPosts = () => {
    onSnapshot(postRef, (snapshot) =>{
        snapshot.forEach(postData => {
            posts.value= []
            let newPost = {
                id: postData.id,
                date: postData.data().date,
                name: postData.data().name,
                email: postData.data().email,
                message: postData.data().message,
                photo: postData.data().photo,
            }
            posts.value.push(newPost)
            posts.value.sort((a,b) => b.date - a.date)
        })
    })
}


export { addPost, getPosts }