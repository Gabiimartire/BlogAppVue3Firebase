import { app } from './firebase.js'
import { getFirestore, addDoc, collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore'
import comments from '../store/comments.js'
const db = getFirestore(app)
const commentsRef = collection(db, "comments")


const addComment = (comment) =>{
    addDoc(commentsRef, comment)
}

const deleteComment = (id) =>{
    deleteDoc(doc(commentsRef, id))
}

onSnapshot(commentsRef, (snapshot) =>{
    comments.value = []
    snapshot.forEach((doc)=>{
        const comment = {
            id: doc.id,
            name: doc.data().name,
            message: doc.data().message,
            email: doc.data().email,
        }
        comments.value.push(comment)
    })
    return comments;
})


export { addComment, comments, deleteComment } 