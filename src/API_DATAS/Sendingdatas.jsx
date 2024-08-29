import axios from 'axios';
import { useState } from 'react';

export const Sendingdatas = () => {
    const [user, setUser] = useState({
        username: "",
        dateofbirth: "",
    });

    const Myfunction = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_SERVER}/api/method`)
            .then((res) => {
                console.log(res.data)
            });
            
        setUser({
            username: "",
            dateofbirth: "",
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>User Name:
                    <input
                        type="text"
                        name='username'
                        value={user.username}
                        onChange={Myfunction}
                        placeholder="Type your name"
                    />
                </label>
                <br />
                <br />
                <label>Date Of Birth:
                    <input
                        type='date'
                        name='dateofbirth'
                        value={user.dateofbirth}
                        onChange={Myfunction}
                    />
                </label>
                <br />
                <br />
                <button type='submit'>Submit</button>
            </form>


        </>
    );
};

