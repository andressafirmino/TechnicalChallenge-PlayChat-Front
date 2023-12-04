import { useState } from "react";
import { IonIcon } from '@ionic/react';
import { paperPlaneOutline } from 'ionicons/icons';
import axios from "axios";

export default function SendBox() {
    const [message, setMessage] = useState("");

    function sendMessage(e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        const body = {
            senderId: 6,
            isPrivate: false,
            text: message
        }
        axios.post(`${process.env.NEXT_PUBLIC_DB_HOST}/messages`, body)
            .then(() => console.log("foi"))
            .catch(e => console.log(e.response.data))
    }
    return (
        <form onSubmit={sendMessage} className=" w-full fixed bottom-0 left-0 flex justify-between items-center">
            <input className="h-16 w-full px-4 text-base font-normal border-none cursor-pointer 
            focus:outline-none placeholder-gray-500 placeholder-italic shadow-md bg-white" placeholder="Write your message here" type="text"
                required value={message} onChange={(e) => setMessage(e.target.value)} />
            <button className="px-4" type="submit">
                <IonIcon icon={paperPlaneOutline} className="text-2xl bg-white hover:text-gray-500" />
            </button>
        </form>
    )
}