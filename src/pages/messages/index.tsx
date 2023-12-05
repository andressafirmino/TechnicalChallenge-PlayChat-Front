import SendBox from "../../components/SendBox";
import axios from "axios";

export async function getServerSideProps() {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_DB_HOST}/messages`);

    return {
        props: {
            messages: response.data
        }
    }
}
export default function Messages({ messages }: any) {

    console.log(messages)
    return (
        <div className="h-screen w-screen overflow-y-auto mt-20 mb-20 px-4">
            {messages.map((message: any) => (
                <div
                    className={`max-w-3xl h-auto  mb-2 rounded-md p-1 ${message.senderId === 4 ? 'self-end bg-gray-200' : 'self-start bg-gray-100'
                        } ${message.senderId === 4 ? 'ml-auto' : 'mr-auto'
                        }`}
                    key={message.id}
                >
                    <p className="text-gray-500 text-xs font-bold">{message.senderId === 4 ? "Você" : message.sender.name}</p>
                    <p className="text-gray-800 text-base">{message.text}</p>
                </div>
            ))}
            <SendBox />
        </div>
    )
}