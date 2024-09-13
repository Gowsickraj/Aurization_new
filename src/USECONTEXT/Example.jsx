import './HooksContext.css'
import { createContext,useState } from "react";
import { ExampleTwo } from "./Example2";

export const text = createContext()
export const Example =()=>{
    const[state,setState]=useState("User Input Table")
    return(
        <>
        <h3 style={{textAlign:"center"}}>Hooks</h3>
        <text.Provider value={{state}}>
            <ExampleTwo/>
        </text.Provider>
        </>
    )
}
