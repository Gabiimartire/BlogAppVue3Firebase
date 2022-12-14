import { app } from './firebase.js'
import { collection, addDoc, doc, deleteDoc, onSnapshot, getFirestore} from 'firebase/firestore'
import { posts } from '../store/PostStore.js'
import user from '../store/profile.js'

const db = getFirestore(app)
const userRef = collection(db, 'users')

const addUser = (user) => {
    addDoc(userRef, user)
}
const updateUser = (user) =>{

}

export { addUser } 