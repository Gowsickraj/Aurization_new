import { Link, Outlet } from "react-router-dom"
import "./Nav.css"
export const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}