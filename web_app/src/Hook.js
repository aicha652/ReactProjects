import { useState } from "react";

const HookState = () => {

    //name is a variable and setName is a function
    const [name, setName] = useState('John');

    const handleClick=()=>{
        setName('Doe')
    }
    return ( 
        <div className="HookState">
            <h2>HookState Page</h2>
            <p>{ name }</p>
            <button onClick={handleClick}>click Me</button>
        </div>
    );
}
 
export default HookState;