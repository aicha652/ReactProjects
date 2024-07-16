import React, {useState, useCallback} from "react"
import Age from "./Age"
import Salary from "./Salary"
import Button from "./Button"

export default function Callback() {
    const[age, setAge] = useState(20)
    const[salary, setSalary] = useState(1000)

    const ageUp = useCallback(() => setAge(age + 1), [age])
    const salaryUp = useCallback(() => setSalary(salary + 1), [salary])

    return(
        <>
           <div className="red">
               <Age age={age}/>
               <Salary salary={salary}/>
           </div>
           <div className="blue">
               <Button text={"Age Up"} action={ageUp}/>
               <Button text={"Salary Up"} action={salaryUp}/>
           </div>
        </>
    )
}