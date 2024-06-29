import { useState } from "react"


export default function MyInput() {

    const [InputValue, setInputValue] = useState("")

    function handleInputChange(event) {
        setInputValue(event.target.value)
    }

    return(
        <div>
            <label>Name</label>
            <input value={InputValue} type="text" onChange={handleInputChange}></input>
        </div>
    )
}