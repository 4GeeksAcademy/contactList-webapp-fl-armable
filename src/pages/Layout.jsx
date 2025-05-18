import { Outlet } from "react-router-dom/dist"
import { Demo } from "./Demo"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <>
            <Demo />
            <Outlet />
        </>
    )
}