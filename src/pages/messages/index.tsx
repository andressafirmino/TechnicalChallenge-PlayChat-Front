import { AuthContext } from "@/context/auth";
import SendBox from "../../components/SendBox";
import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";

export default function Messages() {
    const { userId } = useContext(AuthContext);
    const [messages, setMessages] = useState([])
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            axios.get(`${process.env.NEXT_PUBLIC_DB_HOST}/messages`)
                .then(response => {
                    setMessages(response.data);
                })
                .catch(e => {
                    alert(e.response.data.message);
                })

            return () => clearInterval(intervalId);
        }, 1000);
    }, [])

    return (
        <div className="h-screen w-screen overflow-y-auto mt-20 mb-20 px-4 ">
            {messages.map((message: any) => (
                <div
                    className={`max-w-3xl h-auto  mb-2 rounded-md p-1
                     ${message.sender.id === parseInt(userId) ? 'self-end bg-gray-200' : 'self-start bg-gray-100'
                        } ${message.sender.id === parseInt(userId) ? 'ml-auto' : 'mr-auto'
                        }`}
                    key={message.id}
                >
                    <p className="text-gray-500 text-xs font-bold">{message.sender.id === parseInt(userId) ? "Você" : message.sender.name}</p>
                    <p className="text-gray-800 text-base">{message.text}</p>
                </div>
            ))}
            <div ref={messagesEndRef} />
            <SendBox />
        </div>
    )
}