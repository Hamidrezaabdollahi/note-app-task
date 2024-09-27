import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
type NavbarLinkProps = {
    to: string,
    children: ReactNode
}

export default function NavbarLink({ to, children }: NavbarLinkProps) {
    return (
        <NavLink className={({ isActive }) => isActive ? "text-secondary-700" : "text-secondary-400"} to={to}>{children}</NavLink>
    )
}
