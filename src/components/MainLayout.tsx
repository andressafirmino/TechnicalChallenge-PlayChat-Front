import AuthProvider from "@/context/auth";
import Menu from "./Menu";

export default function MainLayout({ children }: any) {
    return (
        <AuthProvider>
            <div className="h-screen flex items-center justify-center flex-col bg-gray-300">
                <Menu />
                {children}
            </div>
        </AuthProvider>
    )
}