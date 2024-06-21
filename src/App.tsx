import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import useDatabase from './database/database';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';




function App() {
  const { user } = useDatabase()


  return (
    <>
      {user ? <ChatRoom /> : <SignIn />}
    </>
  )
}

export default App
