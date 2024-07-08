
interface ChatMessageProps {
    id: string;
    text: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };

}

const ChatMessage = ({ id, text, createdAt }: ChatMessageProps) => {
    return (
        <>
            <div className=" ">
                <p>ID: {id}</p>
                <p>Message: {text}</p>
                <p className=" lead">{createdAt.seconds} {createdAt.nanoseconds}</p>
            </div>

        </>
    )
}

export default ChatMessage
