import React from "react"

function Button({text, action}) {
    console.log("Render "+ text +"component")
    return(
        <button onClick={action}>{text}</button>
    )
}

export default React.memo(Button)