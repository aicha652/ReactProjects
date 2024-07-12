import './App.css';
import { useRef, useEffect } from "react"

function App() {
  let number = useRef()
  function handleButtonClick() {
    number.current.value = Number(number.current.value) + 1
  }

  useEffect(() =>{
    number.current.focus()
  })

  /*function handleButtonClick() {
    number.current.focus()
  }*/

  return (
    <div>
      <input ref={number}></input>
      <button onClick={handleButtonClick}>+</button>
    </div>
  );
}

export default App;
