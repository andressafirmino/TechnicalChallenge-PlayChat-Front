import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import PaperPlaneOutline from '../assets/paper-plane-outline.svg';
import { AuthContext } from "@/context/auth";

export default function SendBox() {
    const { token, userId } = useContext(AuthContext);
    const [message, setMessage] = useState("");

    const socketIoRef = useRef();

    function sendMessage(e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        const body = {
            senderId: parseInt(userId),
            isPrivate: false,
            text: message
        }
        console.log(token)
        axios.post(`${process.env.NEXT_PUBLIC_DB_HOST}/messages`, body, {
            headers: { authorization: `Bearer ${token}` }
        })
            .then(() => setMessage(""))
            .catch(e => console.log(e.response.data))
    }

    return (
        <form onSubmit={sendMessage} className=" w-full fixed bottom-0 left-0 flex justify-between items-center">
            <input className="h-16 w-full px-4 text-base font-normal border-none cursor-pointer 
            focus:outline-none placeholder-gray-500 placeholder-italic shadow-md bg-white" placeholder="Write your message here" type="text"
                required value={message} onChange={(e) => setMessage(e.target.value)} />
            <button className="h-16 px-4 text-2xl bg-white hover:text-gray-700" type="submit">
                <img src={PaperPlaneOutline.src} alt="Paper Plane Outline"
                    height={PaperPlaneOutline.height} width={PaperPlaneOutline.width} />
            </button>
        </form>
    )
}