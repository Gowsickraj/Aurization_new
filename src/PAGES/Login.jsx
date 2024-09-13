import './Page.css'
import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../USECONTEXT/AuthContext"

export const Login = () => {
    const navigate = useNavigate()
    const { dispatch } = useContext(AuthContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault();

        axios.post("http://localhost:5001/login", {
            username: username, password: password

        }).then((res) => {
            if (res.data.code === 200) {

                console.log(res, "login response");
                dispatch({
                    type: "LOGIN",
                    payload: res.data.token

                })
                localStorage.setItem('token', res.data.token)
                console.log("logged in");
                navigate("/profile")
            }
        })
    }
    return (
        <>
            <div className='reg'>
                <form onSubmit={handleLogin}>
                    <label className='username'>Username
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <br/>
                    <label className='password'>Password
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <br/>

                    <div className='submit'><input type="submit" value="Log in" /></div>
                </form>
            </div>
        </>
    )
}
