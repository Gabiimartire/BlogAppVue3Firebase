import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyB1p-YmRExN-6wii7oGEJVnmHgrhGgqAPg",
    authDomain: "blogappvuecli.firebaseapp.com",
    projectId: "blogappvuecli",
    storageBucket: "blogappvuecli.appspot.com",
    messagingSenderId: "813326478398",
    appId: "1:813326478398:web:e52dc4b55f47c713bf756f"
};
const app = initializeApp(firebaseConfig)
export { app };