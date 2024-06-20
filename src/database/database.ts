import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';



const app =  initializeApp({
    apiKey: "AIzaSyAlO7Sj4WLgu1B4yRKKtRutJhslFnC2HjM",
    authDomain: "chatapp-4d35b.firebaseapp.com",
    databaseURL: "https://chatapp-4d35b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chatapp-4d35b",
    storageBucket: "chatapp-4d35b.appspot.com",
    messagingSenderId: "884118768407",
    appId: "1:884118768407:web:7a34dba407d94d8eafc552"
});


export const auth = getAuth(app)
export const firrstore = getFirestore(app)


