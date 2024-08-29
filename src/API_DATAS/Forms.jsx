import React from "react";
import { useState } from "react";
import axios from "axios";

export const Forms = () => {
    const [state, setState] = useState({
        username: "",
        dateofbirth: ""
    });

    const api = (e) => {
        const { name, value } = e.target;
        setState((pre) => ({
            ...pre,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${process.env.REACT_APP_SERVER}/api/method`,state)
        .then((res) => {
            console.log(res.data);
        })
        
        return (
            <>
            <form onSubmit={handleSubmit}>
                <label>
                    User Name:
                    <input
                        type='text'
                        name='username'
                        placeholder='Enter Your name'
                        value={state.username}
                        onChange={api}
                    />
                </label>
                <br />
                <label>
                    Date Of birth:
                    <input
                        type='date'
                        name='dateofbirth'
                        value={state.dateofbirth}
                        onChange={api}
                        />
                </label>
                <br />
                <button type="submit">Submit</button>
                {/* <Table/> */}
            </form>
        </>
    );
}
}

