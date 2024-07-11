import './App.css';
import { useState, useEffect } from "react"

function App() {
  const [count, setCount] = useState(0)

  /*useEffect(() =>{
    console.log("render")
  })*/

  /*  useEffect(() => {
      console.log("render")
    }, []) */
    
  useEffect(() => {
    console.log("render")
  }, [count])

  function handleButtonClick() {
    setCount(count + 1)
  }
  return (
    <div>
      <p>{ count }</p>
      <button onClick={handleButtonClick}>+</button>
    </div>
  );
}

export default App;
