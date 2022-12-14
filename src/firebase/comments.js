import { app } from './firebase.js'
import { getFirestore, addDoc, collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore'
import { comments } from '../store/PostStore'
const db = getFirestore(app)
const commentRef = collection(db, "comments")

const addComment = (comment) =>{
    addDoc(commentRef, comment)
}

const getComments = () =>{
    onSnapshot(commentRef, (snapshot) =>{
        comments.value = []
        snapshot.forEach(doc => {
            let newComment = {
                id: doc.id,
                postId: doc.data().postId,
                date: doc.data().date,
                name: doc.data().name,
                email: doc.data().email,
                text: doc.data().text,
                photo: doc.data().photo,
            }
            comments.value.push(newComment)
        })
        comments.value.sort((a,b) => a.date - b.date)
    })
}

export { addComment, getComments } 