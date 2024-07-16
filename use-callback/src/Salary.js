import React from "react"

function Salary({salary}) {
    console.log("Render Salary component")
    return(
        <h3>{salary}</h3>
    )
}

export default  React.memo(Salary)