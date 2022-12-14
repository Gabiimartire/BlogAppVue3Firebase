import { app } from './firebase.js'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut} from 'firebase/auth'
import user from '../store/profile'
import { addUser } from './users.js'

const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const loginWithGoogle = () =>{
    signInWithPopup(auth, provider)
        .then((result) => { 
            console.log('resultados', result);
            let newUser = {
                displayName: result.user.displayName,
                photoURL: result.user.photoURL,
                email: result.user.email,
            }
            user.value = {
                ...newUser
            }
            addUser(newUser)
        }).catch((err) => {
            console.warn('error', err)
        });
}
const logout = () =>{
    signOut(auth).then(()=> {
        // sign out successfully
        console.log('logout');
        user.value = null
    }).catch((err) => {
        // an error occurred
        console.log('error logout');
    })
}

export { loginWithGoogle, logout, user }