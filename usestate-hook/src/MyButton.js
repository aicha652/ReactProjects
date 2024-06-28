import { useState } from "react";

export default function MyButton() {
    let [name, setName] = useState("Ali")
    function buttonClicked() {
        if(name === "Ahmed") {
            setName("Ali")
        }
        else {
            setName("Ahmed")
        }
    }
    return(
        <div>
            <button onClick={buttonClicked}>Click Me!</button>
            <h1>{name}</h1>
        </div>
    )
}