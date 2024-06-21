import useDatabase from '../database/database'
import Signout from './Signout'
import ChatMessage from './ChatMessage'
import { useEffect, useState } from 'react'


type DataItem = {
    id: string;
    [key: string]: any; // Adjust this to match the structure of your document data
};

const ChatRoom = () => {

    const { user, fetchData } = useDatabase()
    const [data, setData] = useState<DataItem[]>([]);

    useEffect(() => {
        const getData = async () => {
            if (user) {
                const fetchedData = await fetchData('messages', {});
                setData(fetchedData);
            }
        };
        getData();
    }, [user, fetchData]);

    return (
        <>
            <p>Chat Room</p>
            <p className=' lead'>{user?.displayName}</p>
            <div>
                {data.map(item => <p key={item.id}> {item.text}</p>)}
                {/* {messages && messages.map(msg => <ChatMessage key={msg.createdAt} message={msg} />)} */}
            </div>
            <Signout />

        </>
    )
}

export default ChatRoom
