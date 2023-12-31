import { useContext, useState } from "react";
import styles from '../components/Input.module.css';
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/auth";
import { setCookie } from "nookies";
import { parseCookie } from "next/dist/compiled/@edge-runtime/cookies";

export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(false);
    const { setToken, setUserId } = useContext(AuthContext)


    const router = useRouter();
    function signIn(e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        setDisabled(true);
        const url = `${process.env.NEXT_PUBLIC_DB_HOST}/sign-in`;
        const newSignIn = { email, password };

        axios.post(url, newSignIn)
            .then(response => {
                console.log(response.data)
                setToken(response.data.token);
                setUserId(response.data.userId)
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("userId", response.data.userId);
                router.push("/messages");
            })
            .catch(e => {
                alert(e.response.data.message);
                setDisabled(false);
            })
    }

    return (
        <>
            <form className="flex flex-col w-700px mx-auto my-auto" onSubmit={signIn}>

                <input className={styles.root} placeholder="E-mail" type="email"
                    required value={email} onChange={(e) => setEmail(e.target.value)} disabled={disabled} />
                <input className={styles.root} placeholder="Password" type="password" autoComplete="new-password"
                    required value={password} onChange={(e) => setPassword(e.target.value)} disabled={disabled} />

                <button className="w-48 h-10 rounded-xl mx-auto text-white text-sm font-bold cursor-pointer hover:opacity-70 
            bg-gray-800 m-2 shadow-md flex items-center justify-center" type='submit' disabled={disabled}>
                    {disabled ? (
                        <ThreeDots width={32} height={21} border-radius={4.5} background-color="bg-gray-800" color="#FFFFFF" font-size={9} />
                    ) : (
                        <p>Log In</p>
                    )}
                </button>
            </form>
            <Link className="my-3" href="/sign-up">Don't have an account? Sign Up!</Link>
        </>
    )
}

