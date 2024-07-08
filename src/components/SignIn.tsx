import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import useDatabase from '../database/usedatabase';


const SignIn = () => {
    const { user, auth } = useDatabase()

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }

    return (
        <>
            <button
                type="button"
                className="btn btn-outline-primary"
                onClick={signInWithGoogle}
            >
                Sign in With Google
            </button>
        </>
    )
}

export default SignIn
