import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"

export const Login = () => {
    const navigate = useNavigate()
    const {dispatch} = useContext(AuthContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin =async()=>{
        const responsive = await axios.post("http://localhost:5001/login",{
            username: username, password:password

        })
        dispatch({
            type: "LOGIN",
            payload:responsive.data.token
        })
        localStorage.setItem('token',responsive.data.token)

        navigate("/profile")
        }

    
    return (
        <>
            <div>

                <div>

                    <label>Username </label>

                    <input type="text" placeholder="Username" value={(username)} onChange={(e) => setUsername(e.target.value)} />

                </div>

                <div>

                    <label className='mr-10' >Password </label>

                    <input type="password" placeholder="Password" value={(password)} onChange={(e) => setPassword(e.target.value)} />

                </div>

                <div>

                    <button onclick={(handleLogin)}>LogIn</button>

                </div>



            </div >
        </>
    )
}