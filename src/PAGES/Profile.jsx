import { useContext, useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { AuthContext } from "../USECONTEXT/AuthContext"

export const Profile = () => {
    const { user, dispatch } = useContext(AuthContext)
    const { userName, setUsername } = useState(null)
    const handleLogout = () => {
        dispatch({
            type: "LOGOUT",
        })
    }
    const getUserProfile = async () => {
        // axios.defaults.headers.common['Authorization'] = user
        const token = localStorage.getItem("token");
        axios.post('http://localhost:5001/profile', token)
            .then(res => {
                setUsername(res.data)
            })
            .catch(e => {
                console.log(e);
            })
    }
    useEffect(() => {
        getUserProfile()
    }, [])

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Wellcome </h1> {user && userName}
            <div>
                <button onClick={handleLogout}>
                    LogOut
                </button>
            </div>
        </>
    )
}