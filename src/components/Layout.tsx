
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {

  return (
    <div className="flex flex-col items-center justify-start w-full lg:max-w-screen-lg mx-auto">
        <div className="flex items-center justify-center gap-x-3 my-10 font-light">
            <NavLink className={({isActive})=>isActive ? " text-secondary-600" : "text-secondary-400"} to="add">یادداشت جدید</NavLink>
            <span className=" w-[1px] h-7 border-none bg-secondary-300"></span>
            <NavLink className={({isActive})=>isActive ? " text-secondary-600" : "text-secondary-400"} to="notes-list" >همه‌ی یادداشت ها</NavLink>
        </div>
        <Outlet />
    </div>
  )
}
