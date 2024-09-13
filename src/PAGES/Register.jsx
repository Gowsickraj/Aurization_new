import './Page.css'
import axios from "axios"
import {ToastContainer,toast} from 'react-toastify'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Register = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    // const notify =()=>{
    //     toast("Datas saved...")
    // }
    const handleRegister = (e) => {
        e.preventDefault();

        console.log(username + " " + password)
        axios.post("http://localhost:5001/signup", {
            username, password
        })
            .then(res => {
                alert(res.data);
                navigate("/login")
            })
            .catch(err => err.console.error("Error", err))

        setUsername("");
        setPassword("");

    }
    return (
        <div className='reg'>
            <form onSubmit={handleRegister}>

                <label className='username'>Username :
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label className='password'>Password :
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <div className='submit'><input type="submit" value="Register" /></div>
            </form>
        </div>
    )
}