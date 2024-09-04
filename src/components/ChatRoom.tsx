import useDatabase from '../database/usedatabase'
import Signout from './Signout'
import ChatMessage from './ChatMessage'
import { useEffect, useState } from 'react'
import useFetchData from '../database/useFetechData';



const ChatRoom = () => {

    const { user } = useDatabase()
    const { data, loading, error } = useFetchData('messages');

    return (
        <>
            <div className=' container mt-5'>
                <p>Chat Room</p>
                <p className=' lead'>{user?.displayName}</p>
                <div>
                    {data && data.map(item =>
                        < ChatMessage key={item.id} text={item.text} id={item.id} createdAt={item.createdAt} />
                    )}
                    {/* {messages && messages.map(msg => <ChatMessage key={msg.createdAt} message={msg} />)} */}
                </div>
                <Signout />
            </div >

        </>
    )
}

export default ChatRoom
