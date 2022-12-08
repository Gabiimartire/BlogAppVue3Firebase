import { app } from './firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut} from 'firebase/auth'
import user from '../store/profile'
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const loginWithGoogle = () =>{
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log('user contenido :',user);
            console.log('result',result)
            user.value = result.user
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

export { loginWithGoogle, logout }