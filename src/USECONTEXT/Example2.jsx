import { useContext } from "react"
import { text } from "./Example"

export const ExampleTwo = () => {
    let {state} = useContext(text)
    return (
        <>
        <h1 style={{textAlign:"center"}}>{state}</h1>
        </>
    )
}