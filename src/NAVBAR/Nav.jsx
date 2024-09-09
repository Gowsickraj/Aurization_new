import { Link, Outlet } from "react-router-dom"
import "./Nav.css"
export const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/logout">LogIn</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}