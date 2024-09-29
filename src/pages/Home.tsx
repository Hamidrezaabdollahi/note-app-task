import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()
    return (
        <div className="flex items-center justify-cente fixed top-0 right-0 w-full h-screen ">
            <div className="flex flex-col items-center justify-start gap-y-14 w-full lg:max-w-screen-lg mx-auto ">
                <h1 className="h-1 text-secondary-400 font-bold text-2xl">به اپلیکیشن یادداشت ها خوش آمدید</h1>
                <div className="flex items-center justify-center gap-x-2 ">
                    <button onClick={() => navigate("/notes/add")} className="py-3 px-6 rounded-xl border border-secondary-400 text-secondary-400 outline-none hover:border-secondary-700 hover:text-secondary-700 transition-all duration-200 active:opacity-0">ایجاد یادداشت جدید</button>
                    <button onClick={() => navigate("/notes/notes-list")} className="py-3 px-6 rounded-xl border border-secondary-400 text-secondary-400 outline-none hover:border-secondary-700 hover:text-secondary-700 transition-all duration-200 active:opacity-0">مشاهده یادداشت ها</button>
                </div>
            </div>
        </div>
    )
}