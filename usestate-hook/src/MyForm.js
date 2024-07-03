import { useState } from "react"

export default function MyForm() {
    const [formInputs, setFormInput] = useState({
        name: "",
        email: "",
        age: "",
        generalInfo: "",
        isStudent: false})

    function handleCheckBox(event) {
        setFormInput({...formInputs, isStudent: event.target.checked})
    }
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

            <label>General Info: </label>
            <textarea 
            value = {formInputs.generalInfo}
            onChange={(event) => {
                setFormInput({...formInputs, generalInfo: event.target.value})
            }}/>

           <hr>
           </hr>

           <lable>Are you student</lable>
           <input
           checked={formInputs.isStudent}
           onChange={handleCheckBox} 
           type="checkbox"/>

           <hr>
           </hr>

          <button>Submit</button>
        </form>
    )
}