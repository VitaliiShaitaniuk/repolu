import firebase from 'firebase/app';
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyA2JsAMMIfAx_kbD0ABGMe9m3jXYuIGyPU",
    authDomain: "auth-lucrolote.firebaseapp.com",
    projectId: "auth-lucrolote",
    storageBucket: "auth-lucrolote.appspot.com",
    messagingSenderId: "117612312795",
    appId: "1:117612312795:web:4f375a189415a4fda9f4fe"
})

export const auth = app.auth()
export default app