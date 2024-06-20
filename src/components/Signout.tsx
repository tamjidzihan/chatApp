import { signOut } from 'firebase/auth';
import { auth } from '../database/database';
import { useAuthState } from 'react-firebase-hooks/auth';

const Signout = () => {
    const [user] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth)
    };
    return user && (
        <div>
            <button
                type="button"
                className="btn btn-outline-danger"
                onClick={handleSignOut}
            >
                Sign out
            </button>
        </div>
    )
}

export default Signout
