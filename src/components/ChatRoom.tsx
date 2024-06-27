import useDatabase from '../database/database'
import Signout from './Signout'
import ChatMessage from './ChatMessage'
import { useEffect, useState } from 'react'


interface DataItem {
    id: string;
    text: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
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
                {data && data.map(item => <ChatMessage key={item.id} message={item.text} />)}
                {/* {messages && messages.map(msg => <ChatMessage key={msg.createdAt} message={msg} />)} */}
            </div>
            <Signout />

        </>
    )
}

export default ChatRoom
