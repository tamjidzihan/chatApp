import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../database/database'
import Signout from './Signout'

const ChatRoom = () => {

    const [user] = useAuthState(auth)

    return (
        <>
            <p>Chat Room</p>
            <p className=' lead'>{user?.displayName}</p>
            <Signout />
        </>
    )
}

export default ChatRoom
