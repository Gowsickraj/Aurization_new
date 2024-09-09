import { useContext, useEffect } from "react"
import { AuthContext } from "../Context/AuthContext"
import { useState } from "react"
import axios from "axios"

export const Profile = () => {
    const { user, dispatch } = useContext(AuthContext)
    const { userName, setUsername } = useState(null)
    const handleLogout = () => {
        dispatch({
            type: "Logout",

        })
    }

    const getUserProfile = async () => {
        axios.defaults.headers.common['Authorization'] = user
        await axios.get('http://localhost:5001/profile')
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
            <div>
                Wellcome {userName && userName}
            </div>
            <div>
                <button onClick={handleLogout}>
                    LogOut
                </button>
            </div>
        </>
    )
}