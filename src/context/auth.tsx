
import { parseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { useRouter } from "next/router";
import React, { ReactNode, createContext, useEffect, useState } from "react";

interface AuthContextProps {
    token: string;
    setToken: React.Dispatch<React.SetStateAction<string>>;
    userId: string;
    setUserId: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthContext = createContext<AuthContextProps>({
    token: "",
    setToken: () => { },
    userId: "",
    setUserId: () => { }
});

interface AuthProviderProps {
    children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {

    const [token, setToken] = useState("");
    const [userId, setUserId] = useState("");
    const router = useRouter()

    useEffect(() => {
        const lsToken = window.localStorage.getItem("token");
        const lsUser = window.localStorage.getItem("userId");
        if (lsToken && lsUser) {
            setToken(lsToken);
            setUserId(lsUser);
        }
    }, []);

    useEffect(() => {
        if (token) {
            if ((router.pathname !== "/messages")) {
                router.push("/messages");
            }
        } else {
            if ((router.pathname !== "/sign-in") && (router.pathname !== "/sign-up"))
                router.push("/sign-in");
        }
    }, [token, router]);

    return (
        <AuthContext.Provider value={{
            token, setToken,
            userId, setUserId
        }}>
            {children}
        </AuthContext.Provider>
    )
}

