import React, { useContext } from "react"
import { mediator } from "./App"

const Two = () => {
    const n = useContext(mediator)

    return(
        <>
           <h1>{ n }</h1>
        </>
    )
}

export default Two