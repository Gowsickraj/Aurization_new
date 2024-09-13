import { useState } from 'react'
import './Displaydatas.css'
export const Displaydatas = () => {
    const [names, setNames] = useState("");
    const [age, setage] = useState("");
    return (
        <>

            <form>
                <label>
                    Name:
                    <input type='text'
                        value={names}
                    />
                </label>
                <br />

            </form>


        </>
    )
}
