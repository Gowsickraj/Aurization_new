import { createContext, useContext, useState } from "react";

export const text = createContext()
export const Example =()=>{
    const[state,setState]=useState("Hello world")
}
