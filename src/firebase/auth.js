import { app } from './firebase.js'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut} from 'firebase/auth'
import user from '../store/profile'


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
            localStorage.setItem('user',JSON.stringify(newUser))
            user.value = {
                ...newUser
            }
        }).catch((err) => {
            console.warn('error', err)
        });
}
const logout = () =>{
    signOut(auth).then(()=> {
        // sign out successfully
        console.log('logout');
        user.value = null
        localStorage.setItem('user',null)
    }).catch((err) => {
        // an error occurred
        console.log('error logout');
    })
}

export { loginWithGoogle, logout, user }