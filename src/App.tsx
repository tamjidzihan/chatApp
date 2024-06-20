import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth } from './database/database';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';




function App() {
  const [user] = useAuthState(auth)
  console.log(user)

  return (
    <>
      {user ? <ChatRoom /> : <SignIn />}

    </>
  )
}

export default App
