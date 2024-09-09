import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Register = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleRegister = () => {
        // console.log(username + " " + password)
        axios.post("http://localhost:5001/signup",{
            username : username, password:password
        })
        .then(res => {
            alert(res.data);
            navigate("/login")
            
        })
        setUsername("");
        setPassword("");

    }
    return (

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

                <button onclick={(handleRegister)}>Sign Up </button>

            </div>



        </div >
    )
}