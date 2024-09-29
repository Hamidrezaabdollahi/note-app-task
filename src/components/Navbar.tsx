
import NavbarLink from "../ui/NavbarLink";


export default function Navbar() {
    return (
        <div className="sticky top-0 right-0 py-4 px-6 w-full bg-secondary-100 borber-b border-secondary-400 z-50 shadow-lg shadow-secondary-200  mb-4 ">
            <ul className="flex items-center justify-start gap-x-4 p-2 font-light">
                <li>
                    <NavbarLink to="/">خانه</NavbarLink>
                </li>
                <li>
                    <NavbarLink to="/notes">یادداشت ها</NavbarLink>
                </li>
                <li>
                    <NavbarLink to="/about">درباره‌ی اپلیکیشن</NavbarLink>
                </li>
            </ul>
        </div>
    )
}
