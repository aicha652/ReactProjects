import { useState } from "react"

export default function MyForm() {
    const [formInputs, setFormInput] = useState({name: "", email: "", age: ""})
    return (
        <form 
        onSubmit={(event) => {
            //this line to avoid deleting data when clicking on submit
            event.preventDefault()
            console.log(formInputs)
        }}>
            <lable>Name: </lable>
            <input 
            value={formInputs.name}
            onChange={(event) => {
                setFormInput({...formInputs, name: event.target.value})
            }}/>

            <hr>
            </hr>

            <lable>Email: </lable>
            <input 
            value={formInputs.email} 
            onChange={(event) => {
                setFormInput({...formInputs, email: event.target.value})
            }}/>

            <hr>
            </hr>

            <lable>Age: </lable>
            <input 
            value={formInputs.age} 
            onChange={(event) => {
                setFormInput({...formInputs, age: event.target.value})
            }}/>
 
            <hr>
            </hr>

            <button>Submit</button>
        </form>
    )
}