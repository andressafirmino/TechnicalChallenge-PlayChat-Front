import { useState } from "react";
import styles from '../components/Input.module.css';
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [disabled, setDisabled] = useState(false);

    const router = useRouter();
    function signUp(e: any) {
        e.preventDefault();

        if (password !== confirmPassword) {
            return alert("The values ​​in the Password and Confirm Password fields. do not match");
        }

        setDisabled(true);
        const url = `${process.env.NEXT_PUBLIC_DB_HOST}/sign-up`;
        console.log(url)
        const newSignUp = { name, email, password };

        axios.post(url, newSignUp)
            .then(() => router.push("/sign-in"))
            .catch(e => {
                alert(e.response.data.message);
                setDisabled(false);
            })
    }

    return (
        <div className="h-screen flex items-center justify-center flex-col">
            <p className="w-screen text-4xl text-white text-center font-bold bg-gray-800 p-3 shadow-md">Play Chat</p>
            <form className="flex flex-col w-700px mx-auto my-auto" onSubmit={signUp}>

                <input className={styles.root} placeholder="Name" type="text"
                    required value={name} onChange={(e) => setName(e.target.value)} disabled={disabled} />
                <input className={styles.root} placeholder="E-mail" type="email"
                    required value={email} onChange={(e) => setEmail(e.target.value)} disabled={disabled} />
                <input className={styles.root} placeholder="Password" type="password" autoComplete="new-password"
                    required value={password} onChange={(e) => setPassword(e.target.value)} disabled={disabled} />
                <input className={styles.root} placeholder="Confirm password" type="password" autoComplete="new-password"
                    required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} disabled={disabled} />

                <button className="w-48 h-10 rounded-xl mx-auto text-white text-sm font-bold cursor-pointer hover:opacity-70 
                bg-gray-800 m-2 shadow-md flex items-center justify-center" type='submit' disabled={disabled}>
                    {disabled ? (
                        <ThreeDots width={32} height={21} border-radius={4.5} background-color="bg-gray-800" color="#FFFFFF" font-size={9} />
                    ) : (
                        <p>Create Account</p>
                    )}
                </button>
            </form>
            <Link className="my-3" href="/sign-in">Already have an account? Log in!</Link>
        </div>
    )
}