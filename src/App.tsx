import useDatabase from './database/usedatabase';
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
