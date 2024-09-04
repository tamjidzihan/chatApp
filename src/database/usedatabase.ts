import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';


const useDatabase = () => {
    const app = initializeApp({
        apiKey: "AIzaSyAlO7Sj4WLgu1B4yRKKtRutJhslFnC2HjM",
        authDomain: "chatapp-4d35b.firebaseapp.com",
        databaseURL: "https://chatapp-4d35b-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "chatapp-4d35b",
        storageBucket: "chatapp-4d35b.appspot.com",
        messagingSenderId: "884118768407",
        appId: "1:884118768407:web:7a34dba407d94d8eafc552"
    });

    const auth = getAuth(app)
    const firestoreDB = getFirestore(app)
    const [user] = useAuthState(auth)
    return { auth, firestoreDB, user }
}

export default useDatabase



