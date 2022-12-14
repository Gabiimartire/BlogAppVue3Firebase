import { app } from './firebase.js'
import { getFirestore, addDoc, collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore'
import comments from '../store/comments.js'
const db = getFirestore(app)
const commentRef = collection(db, "comments")


const addComment = (comment) =>{
    addDoc(commentRef, comment)
}

const deleteComment = (id) =>{
    deleteDoc(doc(commentRef, id))
}

const getComments = () =>{
onSnapshot(commentRef, (snapshot) =>{
    comments.value = []
    snapshot.forEach((doc)=>{
        const comment = {
            id: doc.id,
            name: doc.data().name,
            message: doc.data().message,
            email: doc.data().email,
            photo: doc.data().photo,
        }
        comments.value.push(comment)
    })
    comments.value.sort((a,b) => a.date - b.date)
})
}

export { addComment, getComments } 