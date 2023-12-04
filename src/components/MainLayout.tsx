import Menu from "./Menu";

export default function MainLayout({ children }: any) {
    return (
        <div className="h-screen flex items-center justify-center flex-col">
            <Menu />
            {children}
        </div>
    )
}