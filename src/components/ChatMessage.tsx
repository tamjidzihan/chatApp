
interface ChatMessageProps {
    message: any;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
    return (
        <>
            <p>{message.text}</p>
            <small>{message.createdAt?.toDate().toString()}</small>
        </>
    )
}

export default ChatMessage
