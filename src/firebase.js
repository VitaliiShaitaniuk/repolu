import firebase from 'firebase/app';
import "firebase/auth"

export const app = firebase.initializeApp({
    
    "projectId": "lucrolotes",
    "appId": "1:504624167264:web:f96ec17a7814389e0f8605",
    "databaseURL": "https://lucrolotes-default-rtdb.firebaseio.com",
    "storageBucket": "lucrolotes.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyCEWuSAfMq81JFNHzwNkeWSpjhOngCIzs8",
    "authDomain": "lucrolotes.firebaseapp.com",
    "messagingSenderId": "504624167264"
})

export const auth = app.auth()
export default app