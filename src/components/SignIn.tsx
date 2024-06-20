import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../database/database';


const SignIn = () => {

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.error(error);
            });

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
